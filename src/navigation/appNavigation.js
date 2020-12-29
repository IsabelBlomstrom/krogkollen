import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../scenes/homePage';
import {LandingPage} from '../scenes/landingPage';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none' initialRouteName="LandingPage">
    <Screen name='HomePage' component={HomePage}/>
    <Screen name='LandingPage' component={LandingPage}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
