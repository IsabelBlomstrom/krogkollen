
import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';
import HomePageAdmin from '../scenes/homePageAdmin';
import LandingPageAdmin from '../scenes/landingPageAdmin';
import StatisticsPageAdmin from '../scenes/statisticsPageAdmin'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline' fill="#FE9C41"/>
);

const GlobeIcon = (props) => (
  <Icon {...props} name='globe-2-outline' fill="#FE9C41"/>
);

const ChartIcon = (props) => (
  <Icon {...props} name='bar-chart-outline' fill="#FE9C41"/>
);


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    style={styles.bottomNavigator}
    indicatorStyle={{backgroundColor: theme['color-info-500']}}>
    <BottomNavigationTab icon={GlobeIcon}/>
    <BottomNavigationTab icon={PersonIcon}/>
    <BottomNavigationTab icon={ChartIcon}/>
  </BottomNavigation>
);

export const TabNavigatorAdmin = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='LandingPageAdmin' component={LandingPageAdmin}/>
    <Screen name='HomePageAdmin' component={HomePageAdmin}/>
    <Screen name='StatisticsPageAdmin' component={StatisticsPageAdmin}/>
  </Navigator>
);

const styles = StyleSheet.create({
  bottomNavigator: {
    paddingBottom: 25,
    paddingTop: 15,
  },
})