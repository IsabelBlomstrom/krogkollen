import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../scenes/detailPage';
import FavoritesPage from '../scenes/favoritesPage'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TabNavigator } from '../navigation/bottomNavigator';
import DetailPage2 from '../scenes/detailPage2'
import DetailPage3 from '../scenes/detailPage3'


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode='none' initialRouteName="LandingPage">
    <Screen name='LandingPage' component={TabNavigator}/>
    <Screen name="DetailPage" component={DetailPage}/>
    <Screen name="DetailPage2" component={DetailPage2}/>
    <Screen name="DetailPage3" component={DetailPage3}/>
    <Screen name="FavoritesPage" component={FavoritesPage}/>
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