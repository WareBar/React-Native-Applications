import { View, Text, StyleSheet, ImageBackground } from "react-native";

import icedCoffee from '@/assets/images/icedCoffee.jpg'


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffee} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#252525'
  },
  text:{
    color:'whitesmoke',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  }


})

export default app;