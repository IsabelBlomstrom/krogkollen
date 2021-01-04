import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../scenes/homePage';
import { LandingPage } from '../scenes/landingPage';
import DetailPage from '../scenes/detailPage';
import FavoritesPage from '../scenes/favoritesPage'

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none' initialRouteName="LandingPage">
    <Screen name='HomePage' component={HomePage}/>
    <Screen name='LandingPage' component={LandingPage}/>
    <Screen name="DetailPage" component={DetailPage}/>
    <Screen name="FavoritesPage" component={FavoritesPage}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);
