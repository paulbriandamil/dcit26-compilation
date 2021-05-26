import React from "react";
import {
  ImageBackground,
  View,
  Button,
  StyleSheet} 
  from "react-native";

const photo = { uri: "https://i.pinimg.com/originals/9a/09/85/9a0985904bf1cca3be1a90010fa81ff1.gif" };


const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={photo} style={styles.image}>      
    </ImageBackground>
    <Button title="Go Back Home" color='#F2919E' onPress={() => navigation.navigate('Home')}  />
    </View>
  );
}


export default Profile;

const styles = StyleSheet.create({
  container:{    
    backgroundColor: '#E6B2BC',
    alignItems: 'center',
    flex:1,
    
    },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 475,
    width: 365,
    padding: 5,
  }
});