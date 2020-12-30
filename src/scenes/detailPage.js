import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Layout, Text} from '@ui-kitten/components'
import * as Linking from 'expo-linking'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme


export default function DetailPage() {

 const handlePress = () => {
    Linking.openURL('https://www.olkompaniet.com/');

  }



  return(
    <Layout style={styles.container}>
      <Layout style={styles.box}>
        <Text style={styles.text}>Listvy</Text>
        <Text style={styles.text}>Kartvy</Text>
      </Layout>
      <Text category="h6">Ostindiska Ölkompaniet</Text>
      <Text>Här kan det stå lite text om stället som 
        krogen själva tycker är viktig. 
      </Text>
      <TouchableOpacity onPress={() => {handlePress()}}>
      <Text>olkompaniet.com</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
  },
  box: {
    backgroundColor: theme['color-primary-100'],
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    alignSelf: 'center'
  }
})

