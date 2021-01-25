import React, {useState} from 'react'
import { Layout, Icon } from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import { useAuth } from '../authContext';


export default function AdminHeader({ navigation}) {

  return(
    <Layout style={styles.container}>
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
    height: 110,
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
})