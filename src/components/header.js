import React from 'react'
import { Layout } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { default as theme } from '../../AppTheme.json';


export default function Header() {

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
    height: 200,
    backgroundColor: theme['color-primary-100'],
    flexDirection: "column",
    justifyContent: 'space-evenly',
    alignItems:'center',
    position: 'relative',
    top: 20
},
  imgLogo: {
    width: 250,
},
})