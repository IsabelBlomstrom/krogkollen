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
            <Layout style={styles.rowBox}>
                    <Text 
                    style={styles.textCurrent}
                    category="h6">Din statistik</Text>                
            </Layout>  
              <ScrollView>
            <Layout>
            {currentUser && pubs.map(pub => {
                <Image
                style={styles.img}
                resizeMode="contain"
                source={{uri: pub.statistics}}
            />
            })}
            </Layout>
 

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
        paddingBottom: '3%'
      },
      textCurrent: {
        fontFamily: 'Montserrat_400Regular',
        paddingTop: '3%',
        color: theme['color-info-500'],
        textDecorationLine: 'underline'
      },
    img: {
        height: 200,
        width: 250,
    }, 
    icon: {
      height: 30,
      width: 30,
      alignSelf: "flex-end",
      marginTop: 30,
      marginRight: 10,
    },
})
