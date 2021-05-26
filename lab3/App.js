import React, {useState} from 'react';
import { Button, View, StyleSheet, } from 'react-native';
import SampleModal from './components/SampleModal';


export default function App(){
  const [isModalOpen,setIsModalOpen] = useState(false);



  return(
    <View style = {styles.container}>
    <Button color = '#B0E0E6' title = "Click Me" onPress={() => setIsModalOpen(true)} />
    <SampleModal visible ={isModalOpen} onClose= {() =>setIsModalOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6FA'
  }
});