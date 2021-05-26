import React from "react";
import {
  View,
  ImageBackground,
  Button,
  StyleSheet} 
  from "react-native";


const photo = { uri: "https://th.bing.com/th/id/R6d4a9e60f56083e1cad8df51b331dd62?rik=5gU7cb2Qt9tOOQ&riu=http%3a%2f%2fdesignmadeinjapan.com%2fsite%2fwp-content%2fuploads%2f2015%2f07%2ftumblr_n9m262J4Lq1qze3hdo1_r2_500.gif&ehk=y5wUTjlgUaYVbWLw%2b9oCuSYqYdtYKHYCaPM2Jc38WYs%3d&risl=&pid=ImgRaw" };


const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={photo} style={styles.image}>      
      </ImageBackground>
      <Button title="Go Back" color='#078688' onPress={() => navigation.goBack()}  />
    </View>
  );
}


export default About;

const styles = StyleSheet.create({
  container:{    
    backgroundColor: '#044304',
    alignItems: 'center',
    flex:1,
    
    },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 475,
    width: 500,
    padding: 5,
  }
});