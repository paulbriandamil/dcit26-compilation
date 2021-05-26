import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';  


import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

const MainNavigator= () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} 
        options={{title: 'Home',
        drawerIcon: ({focused, size}) => (
        <AntDesign name="home" size={25} color="#522605" />
        ),
        }}
        />
        <Drawer.Screen name="About" component={AboutStack}
        options={{title: 'About',
        drawerIcon: ({focused, size}) => (
        <Entypo name="help" size={25} color="#522605" />
        ),
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default MainNavigator;
