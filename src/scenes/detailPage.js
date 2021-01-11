import React, {useState, useEffect} from 'react'
import { StyleSheet, Image, Linking } from 'react-native'
import { Layout, Text, Icon, Divider } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import Header from '../components/header'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import firebase from 'firebase'
import { NavigationEvents } from 'react-navigation'


export default function DetailPage({route, navigation}) {
  const { item } = route.params;
  const [starState, setStarState] = useState(true);

  const handleLinkPress = () => {
    Linking.openURL('https://www.olkompaniet.com/');
  }


  const addFavorite = () => {
      setStarState(!starState);
    };
  

  return(
    <Layout style={styles.container}>
      <Header/>
      <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>
        <ScrollView>
            <Layout style={styles.imageBox}>
          <Layout style={{backgroundColor: theme['color-primary-100']}}>
            <Text style={styles.heading} category="h4">{item.name}</Text>
            <Divider/>
            <Text style={{paddingTop: 10}}>{item.info}</Text>
            <TouchableOpacity onPress={() => {handleLinkPress()}}>
            <Text>Besök vår hemsida för meny och mer:</Text>
            <Text style={styles.link}>olkompaniet.com</Text>
            </TouchableOpacity>
          </Layout>
        {/* <Image
              style={styles.imgLogo}
              resizeMode="contain"
              source={{uri: item.image}}
        /> */}
        </Layout>
        <Layout style={styles.box}>
            <Text style={styles.heading} category="h6">Hur många är här?</Text>

            <Layout style={styles.statusBar}>
              <Layout style={styles.colorDiv}></Layout>
            </Layout>

            <Text style={styles.quantity} category="h6"></Text>
            <Text style={styles.text}>Just nu är det {item.quantity} personer på den här krogen. 
              Enligt våra uppgifter är det luftigt och just nu har krogen 
              en (grön) nivå.
            </Text>
        </Layout>
          <Layout style={styles.starBox}>
            <Text style={styles.heading} category="h6">Stjärnmärk som favorit</Text>
              <TouchableOpacity onPress={() => {addFavorite()}}>
                <Icon name={starState ? "star-outline" : "star"} fill="#FE9C41" style={styles.star}/>
              </TouchableOpacity>
             
          </Layout>
    </ScrollView>
    </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
  },
  box: {
    backgroundColor: theme['color-primary-100'],
    marginVertical: 10,
    marginHorizontal: 10
  },
  imageBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: 200
  },
  starBox: {
    backgroundColor: theme['color-primary-100'],
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10

  },
    icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
    marginBottom: 10,
},
  imgLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  statusBar: {
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10
  },
  colorDiv: {
    width: 120,
    height: 35,
    backgroundColor: theme['color-success-400'],
    borderRadius: 20
  },
  heading: {
    fontFamily: 'Montserrat_400Regular',
    paddingVertical: '2%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%'
  },
  infoText: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    width: 200
  },
  quantity: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    color: theme['color-success-400']
},
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
  star: {
  width: 35,
  height: 35,

  },
  button: {
    marginTop: 40,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
},
})



