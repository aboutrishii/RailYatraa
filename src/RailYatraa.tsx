import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View , Scroll, Button } from 'react-native'
import React,{ useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const RailYatraa = ({ navigation}) => {
  
  const scrollViewRef = useRef(null);

  // Function to scroll to the button
  const scrollToButton = () => {
    scrollViewRef.current.scrollTo({
      y: 200, // Scroll to the position where the button is located (adjust based on layout)
      animated: true,
    });
  };

  return (
   <View>
    <View style={styles.card1}>
      <View>
      <TouchableOpacity style={styles.card1234}
      onPress={() => navigation.navigate('Train')}
      >
         <Image style={styles.image}
         source={require('../assets/train.png')}
         />
      </TouchableOpacity>
      <View>
            <Text style={styles.text}>Trains</Text>
      </View>
      </View>
      <View>
      <TouchableOpacity style={styles.card1234}
      onPress={() => Linking.openURL('https://www.air.irctc.co.in/')}
      >
        <Image style={styles.image24}
         source={require('../assets/airplane.png')}
         />
       </TouchableOpacity>
       <View>
            <Text style={styles.text}>Flights</Text>
      </View>
      </View>

      <View>
      <TouchableOpacity style={styles.card1234}
      onPress={() => Linking.openURL('https://www.bus.irctc.co.in/home')}
      >
         <Image style={styles.image3}
         source={require('../assets/bus.png')}
         />
      </TouchableOpacity>
      <View>
            <Text style={styles.text}>Buses</Text>
      </View>
      </View>

      <View>
      <TouchableOpacity style={styles.card1234}
      onPress={() => Linking.openURL('https://www.hotels.irctc.co.in/hotels')}
      >
         <Image style={styles.image24}
         source={require('../assets/hotel.png')}
         />
      </TouchableOpacity>  
      <View>
            <Text style={styles.text}>Hotels</Text>
      </View>
      </View>
   </View>
   <View style={styles.card2}>
      
     <View>
     <TouchableOpacity style={styles.card5678}
     onPress={() => navigation.navigate('Book Metro')}
     >
         <Image style={styles.image}
         source={require('../assets/metro.png')}
         />
      </TouchableOpacity> 
      <View>
            <Text style={styles.text}>Metro</Text>
      </View>
     </View> 

     <View>
     <TouchableOpacity style={styles.card5678}
     onPress={() => navigation.navigate('Order Your Favourite Food')}
     >
         <Image style={styles.image}
         source={require('../assets/dish.png')}
         />
      </TouchableOpacity>
      <View>
            <Text style={styles.text6}>Order Food in train</Text>
      </View>
     </View>


     <View>
     <TouchableOpacity style={styles.card5678}
     onPress={() => Linking.openURL('https://www.rr.irctc.co.in/home')}
     >
         <Image style={styles.image}
         source={require('../assets/room.png')}
         />
      </TouchableOpacity>  
      <View>
            <Text style={styles.text7}>Retiring Rooms</Text>
      </View>
     </View>

     <View>
     <TouchableOpacity style={styles.card5678}
     onPress={() => Linking.openURL('https://www.irctctourism.com/')}
     >
         <Image style={styles.image}
         source={require('../assets/tourism.png')}
         />
      </TouchableOpacity> 
      <View>
            <Text style={styles.text}>Tourism</Text>
      </View> 
     </View>
    </View>

    <View style={styles.card3}>
    <View>
     <TouchableOpacity style={styles.card5678}
     onPress={() => navigation.navigate('Book Your Helicopter')}
     >
         <Image style={styles.image24}
         source={require('../assets/helicopter.png')}
         />
      </TouchableOpacity> 
      <View>
            <Text style={styles.text9}>Heliyatra</Text>
      </View> 
     </View>
    </View>

    <View>
      <Text style={{marginLeft:10,marginTop:20}}>Advertisement</Text>
      <TouchableOpacity
      onPress={()=> Linking.openURL('https://kumbh.gov.in/')}>
      <Image
          style={{height:240,width:'90%'}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0C0H_RVXtABNWT66dYptzgL9-qPeWkEpzsw&s'}}
          />
      </TouchableOpacity>
      
    </View>
    
   </View>
  )
}

const styles = StyleSheet.create({
    card1:{
      flexDirection:'row',
      height:20,
      width:20
    },
    card2:{
     flexDirection:'row',
     height:30,
     width:30,
     marginTop:110
    },
    card3:{
     marginTop:100,
     flexDirection:'row',
    },
    card1234: {
      width: 80,
      height:80,
      borderRadius: 80,
      backgroundColor: '#fff',
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 5, // for Android shadow
      margin: 10,
      marginLeft:10
    },
    card5678: {
      width: 80,
      height:80,
      borderRadius: 20,
      backgroundColor: '#fff',
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 5, // for Android shadow
      margin: 10,
      marginLeft:10,
    },

    image:{
      height:52,
      width:52,
      marginLeft:15,
      marginTop:10
    },
    image24:{
      height:49,
      width:49,
      marginLeft:14,
      marginTop:15
    },
    image3:{
      height:52,
      width:52,
      marginLeft:15,
      marginTop:15
    },
    image23:{
      height:50,
      width:50,
      marginLeft:15,
      marginTop:10
    },
    text:{
      fontSize:16,
      fontWeight:'bold',
      marginLeft:25
    },
    text6:{
      fontSize:10,
      fontWeight:'bold',
      marginLeft:2,
      alignItems:'center',
      justifyContent:'center'
    },
    text7:{
      fontSize:10,
      fontWeight:'bold',
      marginLeft:15,
      justifyContent:'center',
      marginBottom:0
    },
    text9:{
      fontWeight:'bold',
      marginLeft:18,
      fontSize:16,
    },
    card9:{
      marginLeft:3,
      marginTop:5
    },
    image24:{
      height:49,
      width:49,
      marginLeft:14,
      marginTop:15
    },
    scrollView: {
      height: 300,
      width: '90%',
      borderWidth: 1,
      marginTop: 20,
    },
})

export default RailYatraa;