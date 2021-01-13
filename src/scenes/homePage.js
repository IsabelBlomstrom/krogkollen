import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Text, Input, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';
import Header from '../components/header'
import PubMap from '../components/pubMap'
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase'

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export default function HomePage({ navigation }) {

  const [pubs, setPub] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [toggle, setToggle] = useState(true);

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

  
  const switchComponent = () => {
    setToggle(!toggle);
  };

    return(
      <Layout style={styles.container}>
            <Header/>
            <Input  
        style={styles.input}
        placeholder="Sök ..."
        accessoryRight={SearchIcon}
        onChangeText={(pub) => {
          setSearchTerm(pub)
        }}
        />
      {pubs.filter((pub) => {
        if(searchTerm == "") {
          return pub
        }else if (pub.name.includes(searchTerm)) {
          return pub
        }
      }).map((pub, key) => {
        console.log(pub);
        return(
          <ScrollView>
             <PubCard navigation={navigation} />
          </ScrollView>
        )
      })
    }

                {/* {toggle ? (
              <ScrollView>
                    <Layout style={styles.rowBox}>
                    <Text 
                    style={styles.textCurrent}
                    category="h6">Listvy</Text>                
                  <TouchableOpacity
                  onPress={() => {
                    switchComponent();
                }}
                >
                    <Text 
                    style={styles.text}
                    category="h6">Kartvy</Text>
                </TouchableOpacity>
            </Layout>
              <PubCard navigation={navigation}/>
                    </ScrollView>

                ) : (
                  <ScrollView>
                  <Layout style={styles.rowBox}>
                  <TouchableOpacity
                onPress={() => {
                  switchComponent();
              }}
              >
                  <Text 
                  style={styles.text}
                  category="h6">Listvy</Text>                
                  </TouchableOpacity>

                  <Text 
                  style={styles.textCurrent}
                  category="h6">Kartvy</Text>
          </Layout>
            <PubMap navigation={navigation}/>
            </ScrollView>
                )} */}
                </Layout>

    )}

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
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  },
  input: {
    marginHorizontal: 10,
    position: 'relative',
    top: -30,
    borderRadius: 15
  },
})


