import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import Header from '../components/header'
import PubMap from '../components/pubMap'
import { ScrollView } from 'react-native-gesture-handler';

export default function MapPage({ navigation }) {

  const navigateDetails = () => {
    navigation.navigate('HomePage');
  };

  return(
    <Layout style={styles.container}>
      <Header/>
      <Layout style={styles.rowBox}>
        <TouchableOpacity
          onPress={() => {
            navigateDetails();
        }}
        >
              <Text style={styles.text}>Listvy</Text>
        </TouchableOpacity>
                <Text style={styles.textCurrent}>Kartvy</Text>
            </Layout>
        <ScrollView>
          <PubMap navigation={navigation}/>
        </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: theme['color-primary-100'],
  },
  rowBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '3%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%'
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  }
})