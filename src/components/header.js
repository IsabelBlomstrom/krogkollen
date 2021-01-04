import React from 'react'
import { Layout, Input } from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';

// const SearchIcon = (props) => (
//   <Icon {...props} name='search-outline'/>
// );

export default function Header() {

  return(
    <Layout style={styles.container}>
      <Image
      style={styles.imgLogo}
      resizeMode="contain"
      source={require('../assets/images/logo.png')}
    />
  {/* <Input  
        placeholder="Type Here..."
        captionIcon={SearchIcon}
        /> */}
   </Layout>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    flexDirection: "column",
},
  imgLogo: {
    alignSelf: "center",
    padding: 0
},
})