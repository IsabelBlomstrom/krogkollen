import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';
import HomePage from '../scenes/homePage';
import FavoritesPage from '../scenes/favoritesPage';
import { LandingPage } from '../scenes/landingPage';

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const GlobeIcon = (props) => (
  <Icon {...props} name='globe-2-outline'/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
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



