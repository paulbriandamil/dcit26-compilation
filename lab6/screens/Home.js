import React , { useState, useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import {
  ImageBackground,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image
  } from "react-native";


const photo = { uri: "https://i.pinimg.com/originals/de/ae/cb/deaecb99387868f9f5acc2e113b36308.gif" };

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0])
      console.log(json.results[0])
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, [])

  return (
    <View style={styles.container}>
    <Button title="Random User" 
              color='#A44B0A' onPress={() => fetchRandomData()} />
    <ImageBackground source={photo} style={styles.image}>
      { 
        isLoading ? 
        <ActivityIndicator size='large' color='#0000ff' />:
        (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={styles.picture} 
              source={{ uri: data.picture.large }} />
            <Text style={styles.text}>{data.name.first} {data.name.last}</Text>
          </TouchableOpacity>
        )
      }
    </ImageBackground>
    </View>
  );
};


export default Home;
  const styles = StyleSheet.create({
  container:{    
    backgroundColor: '#853800',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    flex:1,
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    height: 530,
    width: 370,
  },
  picture:{
    height: 150,
    width: 150,
    marginHorizontal: 110,
    marginVertical: 30,
    borderRadius: 10,
    borderColor: '#A44B0A',
    borderWidth: 3,
    
  },
  text:{
    color: '#FFD059',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 30,
    backgroundColor: 'rgba(208, 105, 30, .2)',
    borderColor: '#A44B0A',
    borderWidth: 3,
  },

});