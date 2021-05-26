//BSCS 3-2 
//members: 
//Magallanes, Erna
//Damil, Paul Brian
//Ruzgal Jr., Cirilo 
import React from 'react';
import { View, Text,StyleSheet,Button,SafeAreaView } from 'react-native';

const App = () => {
  const press = () => {
    alert('Hello World!');
    };
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontStyle:'Italic',fontSize: 40, color:'black'}}> 
        Hello World!
              </Text>
      <Text style={{fontSize: 18, fontStyle:'Italic',fontSize: 35,color:'red'}}> 
        Hello World!
              </Text>
      <Text style={{fontSize: 18, fontStyle:'Italic',fontSize: 30,color:'green',}}> 
        Hello World!
              </Text>
      <Button onPress={press} title="Click Me" color="blue" />
          
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
