import React, {useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';
import FavoriteCard from '../components/favoriteCard'
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import Header from '../components/header'
import { ScrollView } from 'react-native-gesture-handler';
import app from '../base'
import PubCard from '../components/pubCard';

export default function FavoritesPage({navigation}) {
  const [pubs, setPub] = useState([])

  const navigateDetails = (pub) => {
    navigation.navigate('DetailPage', {item: pub},
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const db = app.firestore()
      const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
      const url = ref.child('image.png');
      db.collection("pub").where("favorite", "==", true)
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
        <Header/>
        <ScrollView>
        <Layout style={styles.rowBox}>
            <Text category="h6" style={styles.text}>Favoriter</Text>
          </Layout>
        {pubs.map(pub => 
            <TouchableOpacity
            key={pub.id}
            onPress={() => {
                navigateDetails(pub);
              }}>
            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}> 
                    <Text category="h5" style={styles.pubText}>{pub.name}</Text>
                    <Text style={styles.pubText}>{pub.adress}</Text>
                    <Text style={styles.quantity}>{pub.quantity}/{pub.maxQuantity}</Text>
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: pub.image}}
                />
            </Layout>
            </TouchableOpacity>
   )}
    </ScrollView>
  </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
  },
  rowBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '3%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline',
  },
  pubText: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
},
quantity: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
    color: theme['color-success-400']
},
pubCard: {
    backgroundColor: theme['color-primary-500'],
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 10,
},
imgLogo: {
    height: 100,
    width: 100,
},
})