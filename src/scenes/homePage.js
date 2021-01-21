import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Layout, Text, Input, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';
import Header from '../components/header'
import PubMap from '../components/pubMap'
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Callout, Marker } from 'react-native-maps';
import app from '../base'

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);

export default function HomePage({ navigation }) {

  const [pubs, setPub] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [toggle, setToggle] = useState(true);

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

  
  const switchComponent = () => {
    setToggle(!toggle);
  };

  const navigateDetails = (pub) => {
    navigation.navigate('DetailPage', {item: pub},
    );
  };


    return(
      <Layout style={styles.container}>
         <Header/>
            <Input  
            size='large'
            style={styles.input}
            placeholder="Sök ..."
            accessoryRight={SearchIcon}
            onChangeText={(pub) => {
              setSearchTerm(pub)
        }}
        />

       {toggle ? (
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
            
           {pubs.filter(pub => pub.name.toLowerCase().includes(searchTerm)).map(filteredPubs => (

              <TouchableOpacity
              key={filteredPubs.id}
              onPress={() => {
                  navigateDetails(filteredPubs);
                }}>

            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}> 
                    <Text category="h5" style={styles.pubText}>{filteredPubs.name}</Text>
                      <Text style={styles.pubText}>{filteredPubs.adress}</Text>
                    {filteredPubs.quantity <= filteredPubs.maxQuantity/3 ? (
                        <Text style={[styles.quantity, {color: theme['color-success-400']}]}>{filteredPubs.quantity}/{filteredPubs.maxQuantity}</Text>
                    ) : filteredPubs.quantity >= filteredPubs.maxQuantity/3*2 ? (        
                        <Text style={[styles.quantity, {color: theme['color-danger-400']}]}>{filteredPubs.quantity}/{filteredPubs.maxQuantity}</Text>
                        ) : (
                        <Text style={[styles.quantity, {color: theme['color-warning-400']}]}>{filteredPubs.quantity}/{filteredPubs.maxQuantity}</Text>
                        )}
                    </Layout>
                  <Image
                          style={styles.imgLogo}
                          resizeMode="contain"
                          source={{uri: filteredPubs.image}}
                      />
              </Layout>
          </TouchableOpacity>
              ))}
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

      {/*THIS IS WHERE MAP STARTS*/}

      <Layout style={styles.container}>

                    <MapView
                    key={pubs.id}
                    style={styles.map}
                    initialRegion={{
                    latitude: 57.708870,
                    longitude: 11.974560,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                   }}
            >


        {/*MARKER AND CALLOUT FOR ALL PUBS FILTERED FOR SEARCH*/}

        {pubs.filter(pubMarker => pubMarker.name.includes(searchTerm)).map(searchedPubs => (

            <Marker
            key={searchedPubs.id}
              coordinate={{
                latitude: searchedPubs.coordinate.latitude,
                longitude: searchedPubs.coordinate.longitude
              }}
              >
             <Callout 
              key={searchedPubs.id}
              style={{justifyContent: 'center'}}
              width={150} height={80}
              onPress={() => {
              navigateDetails(searchedPubs);
              }}>
           <TouchableOpacity>
               <Text
                category="h6"
                style={styles.textPopup}
                >
                {searchedPubs.name}</Text>
                <Text
                style={styles.textPopup}>
                {searchedPubs.adress}</Text>
                <Text
                style={styles.textPopup}>
                {searchedPubs.quantity}/{searchedPubs.maxQuantity}</Text>
           </TouchableOpacity>
          </Callout>
        </Marker>


      ))}
     </MapView>

   </Layout>
      {/*MAP ENDS HERE*/}


            </ScrollView>
           
                )} 
                </Layout>

    )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
},
  map: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    height: Dimensions.get('window').height/2,
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
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
  },
  textPopup: {
  fontFamily: 'Montserrat_400Regular', 
  color: 'black',
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
    textDecorationLine: 'underline'
  },
  input: {
    marginHorizontal: 10,
    borderRadius: 15,
    
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


