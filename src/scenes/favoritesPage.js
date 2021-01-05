import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';
import FavoriteCard from '../components/favoriteCard'
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import Header from '../components/header'


export default function FavoritesPage({navigation}) {

  return(
    <Layout style={styles.container}>
      <Header/>
        <Layout style={styles.rowBox}>
          <Text style={styles.text}>Favoriter</Text>
        </Layout>
    <FavoriteCard navigation={navigation}/>
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
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  },
})