import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';



const HomeScreen = ({ navigation }) => {

  const menuItems = [
    { title: 'food in train', image: require('../../assets/pizza.png') },
    { title: 'Train Schedule', image: require('../../assets/schedule.png') },
    { title: 'Train Availability', image: require('../../assets/availability.png') },
    { title: 'Live Station', image: require('../../assets/live.png') },
    { title: 'Coach Position', image: require('../../assets/coach.png') },
    { title: 'Vacant Chart', image: require('../../assets/seats.png') },
    { title: 'Rail Madad', image: require('../../assets/help.png') },
  ];

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Book Train')}>
          <Image
            source={require('../../assets/train.png')} // 
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Book Train Tickets</Text>
          <Image source={require('../../assets/rightarrow.png')} style={styles.logo1} />
        </TouchableOpacity> 
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Book Train')}>
          <Image
            source={require('../../assets/bus.png')} // 
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Book Bus Tickets</Text>
          <Image source={require('../../assets/rightarrow.png')} style={styles.logo} />
        </TouchableOpacity> 
      </View>
       <Text>______________________________________________________</Text>
      <Text style={styles.header}>Train Information Services</Text>
      <View style={styles.container1}>
       <TouchableOpacity
          style={styles.button34}
          onPress={() => navigation.navigate('PNR Status')}>
            <Image
            style={styles.logo34}
            source={require('../../assets/PNR.png')}
            />
          <Text style={styles.buttonText34}>Check PNR Status</Text>
        </TouchableOpacity>
      
      </View>
      <View style={styles.grid}>
      
        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Order Your Favourite Food')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/pizza.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Food in Train</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Train Schedule')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/schedule.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Train Schedule</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Train Availability')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/availability.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Train Availability</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Live Station')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/live.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Live Station</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Coach Position')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/coach.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Coach Position</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Vacant Chart')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/seats.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Vacant Chart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Rail Madad')}
         >
          <View style={styles.circle}>
            <Image source={require('../../assets/help.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Rail Madad</Text>
        </TouchableOpacity>    

        <TouchableOpacity style={styles.card}
         onPress={() =>  navigation.navigate('Ask Disha')}
        >
          <View style={styles.circle}>
            <Image source={require('../../assets/chatbot.png')} style={styles.picture} />
          </View>
          <Text style={styles.text}>Ask Disha</Text>
        </TouchableOpacity>    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  section: { marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#cce5ff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 0,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: { marginLeft: 20, fontSize: 16, fontWeight: 'bold', color:'black' },
  icon: { width: 40, height: 30 },
 header:{
  marginLeft: 7, fontSize: 22 ,  color:'black',
  padding:0,
   fontFamily: 'CustomFont-Regular'
 },
 logo: {
  width: 45, 
  height: 10,
  marginLeft:100
},
logo1: {
  width: 45, 
  height: 10,
  marginLeft:94
},
container1:{
  flexDirection:'row'
},
button34: {
  backgroundColor: '#5DB996',
  padding: 15,
  borderRadius:5,
  marginVertical: 30,
  alignItems: 'center',
  flexDirection: 'row',
  flex: 1,
  marginHorizontal:2
},
buttonText34: { marginLeft:70, fontSize: 14,fontWeight: 'bold', color:'black' },
logo34:{
  width:50,
  height:25,
  marginRight:0
},
grid: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: 20,
},
card: {
  alignItems: 'center',
  margin: 10,
  width: '30%',
},
circle: {
  width: 70,
  height: 70,
  backgroundColor: '#d6d5d0', // Light grey or any preferred color
  borderRadius: 40, // Makes it a perfect circle
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},
picture: {
  width: 40,
  height: 40,
},
text: {
  textAlign: 'center',
  fontSize: 14,
  color: '#333',
},
});



export default HomeScreen;