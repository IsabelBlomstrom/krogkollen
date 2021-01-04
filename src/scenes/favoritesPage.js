import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';
import FavoriteCard from '../components/favoriteCard'
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme


export default function FavoritesPage({navigation}) {

  return(
    <Layout style={styles.container}>
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
    marginTop: 50,
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  },
})