import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Searchscreen from './screens/search screen'
import Returnscreen from './screens/return screen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}
const TabNavigator=createBottomTabNavigator({
  return:{
    screen:Returnscreen
  },
  search:{
 screen:Searchscreen
  }
})

const AppContainer=createAppContainer(TabNavigator)



