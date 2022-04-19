import {StyleSheet, View, Text, ScrollView, Pressable } from 'react-native'
import React, {useEffect, useContext } from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StateContext } from '../StateContext';

const STORAGE_KEY = '@save_total'

const Settings = () => {
  const [total, setTotal] = useContext(StateContext)
    useEffect(() => {

        readData()
    
      }, [])
      const subExp = async (n) => {
        let ptotal = total - n
        try{
            await AsyncStorage.setItem(STORAGE_KEY, ptotal.toString())
        } catch(e){
            alert(e)
        }
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
      <Pressable style={{paddingTop:50}}>
          <View style={{padding:30}}>
          <Text style={{color:'#fff', fontSize:30, fontWeight:'700',}}>Xpenz</Text>
          <Text style={{color:'#fff', fontSize:50, fontWeight:'700',}}>৳ {total}</Text>
          </View>
      </Pressable>
      <View style={{
          height:1000,
          width:'100%',
          backgroundColor: '#fff',
          marginTop:50,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
      }}>
          <View style={{ paddingTop:30, justifyContent:'center', marginHorizontal:30}}>
          <Text style={{fontSize:20, fontWeight: 'bold', color:'#D82148', textAlign: 'center'}}>Substract Expense</Text>
          </View>
          <View style={{borderBottomWidth:2, width:'85%', marginLeft:30, opacity:0.3, marginTop:20}}/>
          <View style={{width:'100%', height:'40%',}}>
              <ScrollView>

                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#D9534F', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="cigar" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>15 ৳</Text>
                       <Pressable onPress={()=> subExp(15)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#F05454'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'normal',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#52057B', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="cigar" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>100 ৳</Text>
                       <Pressable onPress={()=> subExp(100)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#892CDC'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'normal',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>

                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#59405C', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="cigar" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>500 ৳</Text>
                       <Pressable onPress={()=> subExp(500)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#322F3D'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'normal',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#142F43', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="bottle-soda-classic" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>25 ৳</Text>
                       <Pressable onPress={()=> subExp(25)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#2C272E'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#1D5C63', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="numeric-10-box-outline" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>10 ৳</Text>
                       <Pressable onPress={()=> subExp(10)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#1A3C40'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#4700D8', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="dice-d12-outline" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>12 ৳</Text>
                       <Pressable onPress={()=> subExp(12)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#001E6C'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#53354A', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="numeric-5-box-multiple" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>5 ৳</Text>
                       <Pressable onPress={()=> subExp(5)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#903749'
                       }}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#243D25', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="candycane" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>2 ৳</Text>
                       <Pressable onPress={()=> subExp(2)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#52734D',}}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>


                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#1A132F', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="cash-100" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>1000 ৳</Text>
                       <Pressable onPress={()=> subExp(1000)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#283C63',}}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>

                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#303841', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="cash" size={30} color="#fff" />
                       <Text style={{fontSize:20, fontWeight:'bold', color:'#fff'}}>1 ৳</Text>
                       <Pressable onPress={()=> subExp(1)  } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: '#3A4750',}}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Cut</Text>
                        </Pressable>

                      
                    </View>
                  </View>
                  



                  
                  <View style={{marginTop: 30}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#FFEBC1', alignItems: 'center', marginHorizontal: 30, padding:20,
                    borderTopLeftRadius:30, borderBottomRightRadius:30,
                    }}>
        
                       <Icons name="delete-forever" size={30} color="#900" />
                       <Text style={{fontSize:15, fontWeight:'bold', color:'#900'}}>Clear Data</Text>
                       <Pressable onPress={ clearStorage } style={{alignItems: 'center',justifyContent: 'center',paddingVertical: 12,
                       paddingHorizontal: 32,
                       borderRadius: 4,
                       elevation: 3,
                       backgroundColor: 'black',}}>
                        <Text style={{fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                        color: 'white',}}>Reset</Text>
                        </Pressable>

                      
                    </View>
                  </View>
                   
                   
              </ScrollView>

          </View>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#D82148',
  }
})

export default Settings