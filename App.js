import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { VStack } from 'native-base';

import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer, TabActions} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Settings from './screens/Settings';
import About from './screens/About';


const STORAGE_KEY = '@save_total'

export default function App() {

  const Tab = createBottomTabNavigator();
  
  return (
    <>
    <StatusBar backgroundColor='#001E6C' style="light"/>
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: '#fff',  height: 60,
        paddingHorizontal: 5,  position: 'absolute',
      borderTopWidth: 0,  position: 'absolute'},
        tabBarIcon: ({focused, size, colour}) => {
          
          let iconName;
          if(route.name === 'Xpenz') {
            iconName = focused ? 'copy' : 'copy-outline'
          } else if(route.name === 'Settings') {
            iconName = focused ? 'save' : 'save-outline'
          } 
          else if(route.name === 'About') {
            iconName = focused ? 'skull' : 'skull-outline'
          }
          return <Ionic name={iconName} size={size} colour={colour} />
        },
      })} tabBarOptions= {{
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        
      }} >
        <Tab.Screen name='Xpenz' component={Home}/>
        <Tab.Screen name='Settings' component={Settings}/>
        <Tab.Screen name='About' component={About}/>

      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#22ce99',
  },
});
