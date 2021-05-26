import React from 'react';
import {Button, Modal, View, StyleSheet, Image, ScrollView, Text, ImageBackground} from 'react-native';

const SampleModal = props => {
  return (    
    
    <Modal visible = {props.visible} animationType = "fade">
      <ScrollView> 
      <View style = {styles.container}>
      <ImageBackground source={require('./wow.gif')} style={styles.container}>
      <Image style = {styles.picture} source = {require('./nokia.gif')}/>
      <Text style = {styles.text}>
      {'\n\n'}About Nokia{'\n\n'}{'    '}Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics company, founded in 1865. Nokia's headquarters are in Espoo, Finland, in the greater Helsinki metropolitan area. In 2018, Nokia employed approximately 103,000 people across over 100 countries, did business in more than 130 countries, and reported annual revenues of around €23 billion. Nokia is a public limited company listed on the Helsinki Stock Exchange and New York Stock Exchange. It is the world's 415th-largest company measured by 2016 revenues according to the Fortune Global 500, having peaked at 85th place in 2009. It is a component of the Euro Stoxx 50 stock market index.{'\n\n'}
      </Text>
      </ImageBackground>
      </View>
      </ScrollView>
      <Button color = '#B0E0E6' title = "Close" onPress = {props.onClose}/>
    </Modal>
    
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    flex:1,
    
  },
  text:{
    color: '#B0C4DE',
    textAlign: 'justify',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#00000',
    borderColor: '#B0E0E6',
    borderWidth: 3,
  },
  picture:{
    height: 150,
    width: 200,

  },
  
})

export default SampleModal;