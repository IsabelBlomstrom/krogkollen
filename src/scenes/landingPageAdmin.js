import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; 
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function LoginAdmin({navigation}) {

  
  const goToLandingPage = () => {
    navigation.navigate('LandingPage');
  };

  return(
    <Layout style={styles.container}>
              <TouchableOpacity
        onPress={() => {
            goToLandingPage();
        }}>
             <Icon name="arrow-back-outline" fill="#FE9C41" style={styles.icon}/>
        </TouchableOpacity>
              <Image
          style={styles.imgLogo}
          resizeMode="contain"
          source={require('../assets/images/krogkollen.png')}
        />

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
        style={styles.buttonText}>Logga in</Text>
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
imgLogo: {
  alignSelf: "center",
  marginTop: 30, 
  width: 250,
},
icon: {
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
    marginVertical: 50,
    marginHorizontal: 10
},
  text: {
    fontFamily: 'Montserrat_400Regular',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
    marginTop: 40,
  },
  buttonText: {
    fontFamily: 'Montserrat_400Regular',
    margin: 0,
  }
})