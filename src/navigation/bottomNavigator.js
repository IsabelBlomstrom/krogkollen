import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';
import HomePage from '../scenes/homePage';
import FavoritesPage from '../scenes/favoritesPage';
import { LandingPage } from '../scenes/landingPage';
import { default as theme } from '../../AppTheme.json' // <-- Import app theme

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline' fill="#FE9C41"/>
);

const GlobeIcon = (props) => (
  <Icon {...props} name='globe-2-outline' fill="#FE9C41"/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star-outline' fill="#FE9C41"/>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    style={styles.bottomNavigator}
    indicatorStyle={{backgroundColor: theme['color-info-500']}}>
    <BottomNavigationTab icon={GlobeIcon}/>
    <BottomNavigationTab icon={PersonIcon}/>
    <BottomNavigationTab icon={StarIcon}/>
  </BottomNavigation>
);

export const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='LandingPage' component={LandingPage}/>
    <Screen name='HomePage' component={HomePage}/>
    <Screen name='Detaljer' component={FavoritesPage} />
  </Navigator>
);

const styles = StyleSheet.create({
  bottomNavigator: {
    paddingBottom: 25,
    paddingTop: 15,
  },
})