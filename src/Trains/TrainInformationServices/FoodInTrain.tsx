import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'


const foodInTrain = () => {
  return (
   <View style={{ flex: 1 }}> 
   <WebView style={styles.webview} source={{ uri: 'https://www.ecatering.irctc.co.in/' }}  /> 
   </View>
  )
}

export default foodInTrain
const styles = StyleSheet.create({
   webview: {
      flex: 1,
      width: '100%'
    }
})