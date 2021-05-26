import React from "react";
import {
  View,
  Button,
  StyleSheet} 
  from "react-native";


const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Go Back" 
        color='#078688' onPress={() => navigation.goBack()}  />
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
});