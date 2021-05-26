//BSCS 3-2 
//members: 
//Magallanes, Erna
//Damil, Paul Brian
//Ruzgal, Cirilo 

import React, {useState} from 'react';
import{
  View,Text,Button,StyleSheet,TextInput} from 'react-native';
  

export default function App(){
 
  const[count,setCount] = useState('');
  const[items,setItems] = useState([]);
  


  const goalInputHandler=(enteredText) => {
    setCount(enteredText);
  };
  

  const addItemHandler = () => {
    setItems(currentItems =>    
    [...currentItems, count,]);
    setCount("")
  };
  
  
  return(
    
    <View style={styles.container}>
    <View style ={styles.inputBox}>
    <View style={styles.inputContainer}>
         <TextInput
          placeholder="Enter Item"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={count}
          />
           
            <Button title="Add" 
            onPress = {addItemHandler}
            />
            
            
    </View>
    <View>
      {items.map((goal)=> <View style=
      {styles.listItem}
      ><Text key={goal}>{goal}</Text></
      View>)}
    </View>
    </View>
    </View>
 
  );
}

const styles = StyleSheet.create({
  inputBox: {
    padding: 30
    
    
  },
  inputContainer:{
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    alignItems:'center'
   
  },
  input: {
      width:'80%',
      borderColor:'black',
      borderWidth: 3,
      padding: 8
    
  },
  listItem:{
    padding: 10,
    backgroundColor: 'pink',
    margin: 3,
    borderoColor:'orange',
    borderWidth: 3,

  },
  container: {
    backgroundColor: 'teal',
     flex: 1,
}
  });




