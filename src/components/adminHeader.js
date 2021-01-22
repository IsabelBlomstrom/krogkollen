import React from 'react'
import { Layout, Icon } from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import { useAuth } from '../authContext';


export default function AdminHeader({ navigation}) {

  const {logout} = useAuth()

  async function handleLogOut () {
    setError("")
    try {
      await logout();
      navigation.navigate('LandingPageAdmin')
    } catch {
      setError("Failed to log out")
    }
  }

  return(
    <Layout style={styles.container}>
       <TouchableOpacity
        onPress={() => {
          handleLogOut();
        }}>
          <Icon fill="#FE9C41" style={styles.icon} name='log-out-outline'/>
        </TouchableOpacity>
      <Image
      style={styles.imgLogo}
      resizeMode="contain"
      source={require('../assets/images/krogkollen.png')}
    />
   
   </Layout>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: theme['color-primary-100'],
    flexDirection: "column",
    justifyContent: 'space-evenly',
    position: 'relative',
    top: 20
},
  imgLogo: {
    width: 250,
    alignSelf: "center",
},
icon: {
  height: 30,
  width: 30,
  alignSelf: "flex-end",
  marginTop: 50,
  marginRight: 10,
},
})