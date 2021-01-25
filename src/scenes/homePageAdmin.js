import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import { ScrollView } from 'react-native-gesture-handler';
import app from '../base'
import { useAuth } from '../authContext';
import AdminHeader from '../components/adminHeader';


export default function HomePageAdmin({ navigation }) {
  const [pubs, setPubs] = useState([])
  const { logout, currentUser } = useAuth()
  const [error, setError] = useState("")
  
  useEffect(() => {
    const fetchData = async () => {
        const db = app.firestore()
        const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
        const url = ref.child('image.png');
         db.collection('pub').where('owner', '==', currentUser.uid)
         .onSnapshot(snapShot => {
          const newPub = snapShot.docs.map((doc) => ({
            id: doc.id,
            url,
            ...doc.data()
        }))
        setPubs(newPub)
    })
    }
    
    fetchData();
}, [])

  const navigateDetails = (pub) => {
    navigation.navigate('EditPageAdmin', {item: pub},
    );
  };


  async function handleLogOut () {
    setError("")
    try {
      await logout();
      navigation.navigate('LandingPageAdmin')
    } catch {
      setError("Det gick inte att logga ut just nu, försök igen senare")
      Alert.alert(error)
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
            <AdminHeader/>
              <ScrollView>
                    <Layout style={styles.rowBox}>
                    <Text 
                    style={styles.textCurrent}
                    category="h6">Dina anslutna krogar</Text>                
            </Layout>            
            {currentUser && pubs.map(pub => (
            <TouchableOpacity
            key={pub.id}
            onPress={() => {
                navigateDetails(pub);
              }}>
            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}> 
                    <Text category="h5" style={styles.pubText}>{pub.name}</Text>
                      <Text style={styles.pubText}>{pub.name}</Text>
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
  ))}
  </ScrollView>

                </Layout>

    )}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme['color-primary-100'],
    },
    pubContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme['color-primary-100'],
      alignContent: "center",
      flexDirection: "column",
    },
    rowBox: {
        backgroundColor: theme['color-primary-100'],
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      text: {
        fontFamily: 'Montserrat_400Regular',
        paddingTop: '3%',
      },
      pubText: {
        fontFamily: 'Montserrat_400Regular', 
        marginVertical: 10,
        marginHorizontal: 10,
    },
      textCurrent: {
        fontFamily: 'Montserrat_400Regular',
        paddingTop: '3%',
        color: theme['color-info-500'],
        textDecorationLine: 'underline',
        alignSelf: 'center'
      },
      input: {
        marginHorizontal: 10,
        borderRadius: 15
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
    icon: {
      height: 30,
      width: 30,
      alignSelf: "flex-end",
      marginTop: 25,
      marginRight: 10,
    },
})
