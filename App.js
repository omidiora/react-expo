import React , {useState}from 'react';
import {StyleSheet , Text ,  View ,TextInput ,Button , FlatList } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StartGameScreen/>
      
    </View>
 
  )}

  

const styles=StyleSheet.create({
  screen:{
   flex:1,
  },
  
})

export default App
