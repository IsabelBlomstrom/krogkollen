import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default function LoginAdmin({navigation}) {

  const createUser = () => {
  firebase.auth()
  .createUserWithEmailAndPassword('lilla@resturangen.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  });
  }

  const signInUser = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

  }

  const logoff = () => {
    firebase.auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }

  return(
    <Layout style={styles.container}>
              <TouchableOpacity
        onPress={() => {
            navigation.pop();
        }}>
             <Icon name="arrow-back-outline" fill="#FE9C41" style={styles.icon}/>
        </TouchableOpacity>
              {/* <Image
          style={styles.imgLogo}
          resizeMode="contain"
          source={require('../assets/images/krogkollen.png')}
        /> */}

  <Text style={styles.text}>
    E-mail
  </Text>
  <Input 
  style={styles.input}
  value={email}
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
      signInUser();
  }}>
    <Text
        category="h6" 
        style={styles.buttonText}>Logga in</Text>
    </Button>
    <Button 
    size="medium"
    style={styles.button}
    onPress={() => {
      logoff();
    }}
    >Logga ut</Button>
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
    alignSelf: 'flex-start',
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
  logOffButton: {

  },
  buttonText: {
    fontFamily: 'Montserrat_400Regular',
    margin: 0,
  }
})