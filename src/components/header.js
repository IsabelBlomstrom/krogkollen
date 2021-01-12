import React, { useState, useEffect }from 'react'
import { Layout, Input, Icon, Text } from '@ui-kitten/components';
import { StyleSheet, Image } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import firebase from 'firebase'

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export default function Header() {

  const [pubs, setPub] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const db = firebase.firestore()
          const ref = firebase.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
          const url = ref.child('image.png');
          db.collection('pub')
          .onSnapshot((snapShot) => {
              const newPub = snapShot.docs.map((doc) => ({
                  id: doc.id,
                  url,
                  ...doc.data()
              }))
              setPub(newPub)
          })
      }
      fetchData();
  }, [])

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
    {
      pubs.map( pub => {
        return(
          <Text>{pub.name}</Text>
        )
      })
    }
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