import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import DetailCard from "../components/detailCard"
import Header from '../components/header'


export default function DetailPage({navigation}) {

  return(

    <Layout style={styles.container}>
      <Header/>
              <Layout style={styles.rowBox}>
          <Text style={styles.textCurrent}>Listvy</Text>
          <Text style={styles.text}>Kartvy</Text>
        </Layout>
      <DetailCard navigation={navigation} />
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
    paddingTop: '3%'
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  }
})



