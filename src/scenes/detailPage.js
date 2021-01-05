import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text, Icon } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import DetailCard from "../components/detailCard"
import Header from '../components/header'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function DetailPage({navigation}) {

  return(
    <Layout style={styles.container}>
      <Header/>
        <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>
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
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '3%',
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
    marginBottom: 10,
},
})



