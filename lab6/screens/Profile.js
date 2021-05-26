import React from "react";
import { Entypo } from '@expo/vector-icons';
import {
  ImageBackground,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Text
  } 
  from "react-native";
 

const photo = { uri: "https://i.pinimg.com/originals/e4/10/af/e410af40fc1ee048f5ec0677b3c66ad5.gif" };


const Profile = ({ route, navigation }) => {
  const data = route.params;

  return (
  <View style={styles.container}>
  <ImageBackground source={photo} style={styles.image}>      
        <ScrollView>
          <Image
            style={styles.picture}
            source={{ uri: data.picture.large }}
          />
          <Text style={styles.text2}>
            {data.name.first} {data.name.last}
          </Text>

          <Text style={styles.text}>
          <Entypo name="user" 
                  size={20} 
                  color="#60e4ef" />  About {'\n\n'}
            Age: {data.dob.age} {'\n'}
            Birthday: {data.dob.date} {'\n'}
            Gender: {data.gender} {'\n'}
            Address:  {data.location.street.number}, {data.location.street.name}, {data.location.state}, {data.location.country}
            {'\n\n'}

          <Entypo name="mail" 
                  size={20}
                  color="#60e4ef" />  Contact {'\n\n'}
            Email: {data.email} {'\n'}
            Phone: {data.phone} {'\n\n'}

          <Entypo name="dots-three-horizontal"
                  size={20} 
                  color="#60e4ef" />  Others {'\n\n'}
            Date Registered: {data.registered.date} {'\n'}
          </Text>
        </ScrollView>
  </ImageBackground>
  </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{    
    backgroundColor: '#161c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    flex:1,
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    height: 585,
    width: 370,
  },
  picture:{
    height: 150,
    width: 150,
    marginHorizontal: 100,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#2f3492',
    borderWidth: 3,
    
  },
  text:{
    color: '#60e4ef',
    textAlign: 'left',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 30,
    backgroundColor: 'rgba(47,53,137,.2)',
    borderColor: '#2f3492',
    borderWidth: 3,
  },
    text2:{
    color: '#60e4ef',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'rgba(47,53,137,.2)',
    borderColor: '#2f3492',
    borderWidth: 3,
  },
});