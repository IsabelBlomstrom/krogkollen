import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Layout, Text, Button, Icon } from '@ui-kitten/components'
import * as Linking from 'expo-linking'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme



export default function DetailCard({ navigation }) {

  const navigateDetails = () => {
    navigation.navigate('HomePage');
  };
  const handlePress = () => {
    Linking.openURL('https://www.olkompaniet.com/');
  }


  return (
    <ScrollView>
    <Layout style={styles.container}>
        <Layout style={styles.box}>
            <Text style={styles.heading} category="h6">Ostindiska Ölkompaniet</Text>
            <Text style={styles.text}>Här kan det stå lite text om stället som 
              krogen själva tycker är viktig. 
            </Text>

            <TouchableOpacity onPress={() => {handlePress()}}>
            <Text style={styles.link}>olkompaniet.com</Text>
            </TouchableOpacity>
        </Layout>

        <Layout style={styles.box}>
            <Text style={styles.heading} category="h6">Hur många är här?</Text>

            <Layout style={styles.statusBar}>
              <Layout style={styles.colorDiv}></Layout>
            </Layout>

            <Text style={styles.quantity} category="h6">50/150</Text>
            <Text style={styles.text}>Just nu är det (50) personer på den här krogen. 
              Enligt våra uppgifter är det luftigt och just nu har krogen 
              en (grön) nivå.
            </Text>
        </Layout>

        <Layout style={styles.starBox}>
        <Text style={styles.heading} category="h6">Stjärnmärk som favorit</Text>
        <Icon name="star-outline" fill="#FE9C41" style={styles.star}/>
        </Layout>
  </Layout>
  </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    marginHorizontal: 10,
  },
  box: {
    backgroundColor: theme['color-primary-100'],
    marginVertical: 10
  },
  starBox: {
    backgroundColor: theme['color-primary-100'],
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statusBar: {
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10
  },
  colorDiv: {
    width: 120,
    height: 35,
    backgroundColor: theme['color-success-400'],
    borderRadius: 20
  },
  heading: {
    fontFamily: 'Montserrat_400Regular',
    paddingVertical: '2%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%'
  },
  quantity: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    color: theme['color-success-400']
},
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
  star: {
  width: 35,
  height: 35,

  },
  button: {
    marginTop: 40,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
},
})