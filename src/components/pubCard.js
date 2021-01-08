import React from 'react'
import { Layout, List, Text} from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import { useEffect } from 'react';
import { useState } from 'react';
import firebase from '../firebase';


export default function PubCard({ navigation }) {
    const [pubs, setPub] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection('pub').get()
            setPub(data.docs.map(doc => doc.data()))
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
            onPress={() => {
                navigateDetails();
              }}>
            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}> 
                    <Text category="h5" style={styles.text}>{pub.name}</Text>
                    <Text style={styles.text}>{pub.adress}</Text>
                    <Text style={styles.quantity}>{pub.quantity}</Text>
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
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