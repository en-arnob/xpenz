import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { VStack } from 'native-base';

import Ionic from 'react-native-vector-icons/Ionicons'

const STORAGE_KEY = '@save_total'

export default function App() {

  const [total, setTotal] = useState('')

  useEffect(() => {

    readData()

  }, [])

  const addExp = async (n) => {
    let ptotal = total + n
    await AsyncStorage.setItem(STORAGE_KEY, ptotal.toString())
    
    setTotal(ptotal)
    
  
  }
  
  const readData = async () => {
    let totalVal = await AsyncStorage.getItem(STORAGE_KEY);
    if(totalVal){
        totalVal = parseInt(totalVal);
        
        setTotal(totalVal)
    } else {
      setTotal(0)
    }
  
  }

  

  const clearStorage = async () => {
    
      await AsyncStorage.clear()
      setTotal(0)
  
  }
  
  return (
    <View style={styles.container}>
      <Text>{total}</Text>
      
      <Button title="Ten" onPress={()=> addExp(10)  } />
      <Button title="Clear" onPress={clearStorage} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#22ce99',
  },
});
