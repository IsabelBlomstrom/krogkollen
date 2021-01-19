import React, {useState, useRef} from 'react'
import { StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native'
import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import app from '../base';
import { useAuth } from '../authContext';

export default function LoginAdmin({navigation}) {
  const { login } = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
      setError("")
      setLoading(true)
      await login(email, password)
      navigation.navigate('HomePageAdmin')
    } catch {
      setError()
      Alert.alert("Det gick inte att logga in. Kontrollera användarnamn och lösenord");
    }
    setLoading(false)
  }

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
  <Text style={styles.text}>
    E-mail
  </Text>
  <Input 
  style={styles.input}
  placeholder="E-mail"
  onChangeText={(userEmail) =>
    setEmail(userEmail)
  }
 />
  <Text style={styles.text}>
    Lösenord
  </Text>
  <Input 
    style={styles.input}
    placeholder="Lösenord"
    autoCapitalize="none"
    secureTextEntry={secureTextEntry}
    accessoryRight={renderIcon}
    onChangeText={(userPassword) =>
      setPassword(userPassword)
    }
    />
    <Button 
    size="medium"
    style={styles.button}
    onPress={() => {
      handleSubmit(email, password);
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
    justifyContent: 'center'
},
icon: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
},
  text: {
    fontFamily: 'Montserrat_400Regular',
    marginHorizontal: 10,
    marginVertical: 20,
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