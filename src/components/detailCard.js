import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components'
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
            <Text style={styles.text}>(//////....................)</Text>
            <Text style={styles.heading}>50/150</Text>
            <Text style={styles.text}>Just nu är det (50) personer på den här krogen. 
              Enligt våra uppgifter är det luftigt och just nu har krogen 
              en (grön) nivå.
            </Text>
        </Layout>

        <Layout style={styles.box}>
        <Text style={styles.heading} category="h6">Stjärnmärk som favorit</Text>
        </Layout>

    <Button 
            size="medium"
            style={styles.button}
            onPress={() => {
                navigateDetails()
              }}
            >
            <Text
                category="h6" 
                >Tillbaka</Text>
        </Button>
  </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    padding: '4%'

  },
  box: {
    backgroundColor: theme['color-primary-100'],
    marginTop: 40,
  },
  heading: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '2%',
    paddingBottom: '2%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%'
  },
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
  button: {
    marginTop: 40,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
},
})