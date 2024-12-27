import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

  return (
    <View style={{ flex: 1 }}> 
    <WebView source={{ uri: 'https://heliyatra.irctc.co.in/' }} /> 
    </View>
  );
};

const styles = StyleSheet.create({
 
    webview: {
       flex: 1,
       width: '100%'
      }
});

export default App;