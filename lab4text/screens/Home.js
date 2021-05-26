import React from "react";
import {
  ImageBackground,
  View,
  Button,
  StyleSheet
} from "react-native";

const photo = { uri: "https://i.pinimg.com/originals/de/ae/cb/deaecb99387868f9f5acc2e113b36308.gif" };

const Home = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <Button title="Profile" 
      color='#A44B0A'onPress={() => navigation.navigate('Profile')} 
      />
      <ImageBackground source={photo} style={styles.image}>
      </ImageBackground>
    </View>
    
  );
}


export default Home;

const styles = StyleSheet.create({
  container:{    
    backgroundColor: '#522605',
    alignItems: 'center',
    padding: 1,
    flex:1,
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    height: 500,
    width: 370,
    padding: 5,
  }
});