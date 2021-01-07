import React from 'react'
import { Layout, Input, Icon } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { default as theme } from '../../AppTheme.json';

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export default function Header() {

  return(
    <Layout style={styles.container}>
      <Image
      style={styles.imgLogo}
      resizeMode="contain"
      source={require('../assets/images/logo.png')}
    />
  <Input  
        style={styles.input}
        placeholder="Sök ..."
        accessoryRight={SearchIcon}
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
    height: 170
},
input: {
  marginHorizontal: 10,
  position: 'relative',
  top: -30,
  borderRadius: 15
}
})