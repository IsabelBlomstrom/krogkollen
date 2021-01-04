import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LandingPage } from '../scenes/landingPage';
import DetailCard from '../components/detailCard';
import { StyleSheet } from 'react-native';
import { TabNavigator } from '../navigation/bottomNavigator';
import HomePage from '../scenes/homePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none' initialRouteName="LandingPage">
    <Screen name='LandingPage' component={LandingPage}/>
    <Screen name='HomePage' component={TabNavigator}/>
    <Screen name="DetailPage" component={DetailCard}/>
  </Navigator>
);


export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  BottomNavigation: {
      marginVertical: 8,
  },
  icons: {
    color: 'white',
  }
})