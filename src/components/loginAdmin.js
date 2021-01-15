import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; 



export default function LoginAdmin() {

  return(
    <Layout style={styles.container}>
  <Text style={styles.text}>
    E-mail
  </Text>
  <Input 
  style={styles.input}
  placeholder="E-mail"/>
  <Text style={styles.text}>
    Lösenord
  </Text>
  <Input 
    style={styles.input}
    placeholder="Lösenord"/>
    <Button 
    size="medium"
    style={styles.button}
    onPress={() => {
      navigateDetails();
  }}>
    <Text
        category="h6" 
        style={styles.buttonText}>Gå vidare</Text>
    </Button>
    </Layout>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
},
  text: {
    fontFamily: 'Montserrat_400Regular',
    marginHorizontal: 10
  },
  input: {
    marginHorizontal: 10
  },
  button: {
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: 'Montserrat_400Regular',
    margin: 0
  }
})