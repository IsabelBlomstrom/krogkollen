import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import { ScrollView } from 'react-native-gesture-handler';
import app from '../base'
import { useAuth } from '../authContext';
import AdminHeader from '../components/adminHeader';


export default function StatisticsPageAdmin({ navigation }) {
  const [pubs, setPubs] = useState([])
  const { logout, currentUser } = useAuth()
  const [error, setError] = useState("")
  
  useEffect(() => {
      const fetchData = async () => {
          const db = app.firestore()
          const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
          const url = ref.child('image.png');
           db.collection('pub').where('owner', '==', currentUser.uid).get()
          .then(snapShot => {
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
          <Icon fill="#FE9C41" style={styles.icon}name='log-out-outline'/>
        </TouchableOpacity>
            <AdminHeader/>

              <ScrollView>
                        <Text 
                        style={styles.textCurrent}
                        category="h6">Din statistik</Text>                
              {currentUser && pubs.map(pub => (
               <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: pub.statistics}}
                />
  ))}
  </ScrollView>

                </Layout>

    )}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme['color-primary-100'],
    },
      textCurrent: {
        fontFamily: 'Montserrat_400Regular',
        paddingTop: '3%',
        color: theme['color-info-500'],
        textDecorationLine: 'underline',
        alignSelf: 'center'
      },
    imgLogo: {
        height: 300,
        marginVertical: 20
    }, 
    icon: {
      height: 30,
      width: 30,
      alignSelf: "flex-end",
      marginTop: 40,
      marginRight: 10,
    },
})
