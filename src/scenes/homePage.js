import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';
import PubCard2 from '../components/pubCard2'
import PubCard3 from '../components/pubCard3'
import Header from '../components/header'


export default function HomePage({ navigation }) {

    return(
        <Layout style={styles.container}>
            <Header/>
         <Layout style={styles.rowBox}>
             <Text style={styles.textCurrent}>Listvy</Text>
             <Text style={styles.text}>Kartvy</Text>
        </Layout>
            <PubCard navigation={navigation}/>
            <PubCard2 navigation={navigation}/>
            <PubCard3 navigation={navigation}/>

        </Layout>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
},
button: {
    marginBottom: 100,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
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


