import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const App = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [trainStatus, setTrainStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTrainStatus = async () => {
    if (!trainNumber) {
      setError("Please enter a valid train number.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/train-status/${trainNumber}`
      );
      setTrainStatus(response.data);
    } catch (err) {
      setError("Failed to fetch train status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Live Train Running Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Train Number"
        value={trainNumber}
        onChangeText={setTrainNumber}
        keyboardType="numeric"
      />
      <Button title="Get Status" onPress={fetchTrainStatus} />
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      {trainStatus && (
        <FlatList
          data={trainStatus.stations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.stationCard}>
              <Text style={styles.stationName}>{item.stationName}</Text>
              <Text>Arrival: {item.arrival || "N/A"}</Text>
              <Text>Departure: {item.departure || "N/A"}</Text>
              <Text>Delay: {item.delay || "On Time"}</Text>
              <Text>Distance: {item.distance} KM</Text>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  loadingText: {
    fontSize: 16,
    color: "blue",
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
  stationCard: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  stationName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
