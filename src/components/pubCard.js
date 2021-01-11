import React from 'react'
import { Layout, List, Text} from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import { useEffect } from 'react';
import { useState } from 'react';
import { app } from '../base';


export default function PubCard({ navigation }) {
    const [pubs, setPub] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
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

    const navigateDetails = () => {
        navigation.navigate('DetailPage');
      };


    return(
        <Layout style={styles.container}>
             {pubs.map(pub => 
            <TouchableOpacity
            key={pub.id}
            onPress={() => {
                navigateDetails();
              }}>
            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}> 
                    <Text category="h5" style={styles.text}>{pub.name}</Text>
                    <Text style={styles.text}>{pub.adress}</Text>
                    {pub.quantity <= pub.maxQuantity/3 ? (
                        <Text style={[styles.quantity, {color: theme['color-success-400']}]}>{pub.quantity}/{pub.maxQuantity}</Text>

                    ) : pub.quantity >= pub.maxQuantity/3*2 ? (        
                    <Text style={[styles.quantity, {color: theme['color-danger-400']}]}>{pub.quantity}/{pub.maxQuantity}</Text>
                        ) : (
                    <Text style={[styles.quantity, {color: theme['color-warning-400']}]}>{pub.quantity}/{pub.maxQuantity}</Text>
                        )}
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: pub.image}}
                />
            </Layout>
            </TouchableOpacity>
   )}
        </Layout>
    )
} 

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
    flexDirection: "column",
},
text: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
},
quantity: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
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