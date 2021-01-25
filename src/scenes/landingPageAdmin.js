import React, {useState, useRef} from 'react'
import { View, StyleSheet, Keyboard, Alert, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import { Layout, Text, Input, Icon, Button } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; 
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../authContext';

export default function LoginAdmin({navigation}) {
  const { login } = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();


  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  async function handleSubmit () {
      try {
        setLoading(true)
        await login(email, password)
        navigation.navigate('HomePageAdmin')
      } catch {
        Alert.alert("Det gick inte att logga in. Kontrollera användarnamn och lösenord")
      }
      emailRef.current.clear()
      passwordRef.current.clear()
      setLoading(false)
    }

  

  const goToLandingPage = () => {
    navigation.navigate('LandingPage');
  };


  return(
    <Layout style={styles.outerContainer}>
                    <TouchableOpacity
        onPress={() => {
            goToLandingPage();
        }}>
             <Icon name="arrow-back-outline" fill="#FE9C41" style={styles.icon}/>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
          >
              <Input
              defaultValue=""
              ref={emailRef}
              label="E-mail"
              style={styles.input}
              placeholder="exempel@info.com"
              onChangeText={(userEmail) => {
                setEmail(userEmail);
              }}
              />
              <Input 
              defaultValue=""
                ref={passwordRef}
                label="Lösenord"
                style={styles.input}
                placeholder="*****"
                secureTextEntry={secureTextEntry}
                accessoryRight={renderIcon}
                onChangeText={(userPassword) => {
                  setPassword(userPassword);
                }}
                />
          <Button 
            style={styles.button}
            onPress={() => {
              handleSubmit(email, password);
           }}>
          <Text
              category="h6" 
              style={styles.buttonText}>Logga in</Text>
          </Button>

       </KeyboardAvoidingView>
     </TouchableWithoutFeedback>

    </Layout>

  )
}

const styles = StyleSheet.create({
outerContainer: {
  flex: 2,
  backgroundColor: theme['color-primary-100'],
  },
container: {
  flex: 1,
  backgroundColor: theme['color-primary-100'],
  alignContent: "center",
  justifyContent: 'center',
},
icon: {
  width: 35,
  height: 35,
  marginHorizontal: 10,
  alignSelf: 'flex-start',
  marginTop: 40
},
  text: {
    fontFamily: 'Montserrat_400Regular',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 10,
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