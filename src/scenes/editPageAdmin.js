import React, {useState, useEffect} from 'react'
import { StyleSheet, Linking, Image } from 'react-native'
import { Layout, Text, Icon, Divider } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import Header from '../components/header'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

export default function EditPageAdmin({route, navigation}) {
  const { item } = route.params;


  const handleLinkPress = () => {
    Linking.openURL(`${item.url}`);
  }
  
  return(
    <Layout style={styles.container}>
      <Header/>

    <Layout style={styles.topMenu}>
    <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>
        <Text category="h6" style={styles.heading}>Redigera krog</Text>
        <Icon name="edit-outline" fill="#FE9C41" style={styles.icon}/>
    </Layout>


        <ScrollView>
            <Layout style={styles.imageBox}>
          <Layout style={{backgroundColor: theme['color-primary-100']}}>
            <Text style={styles.text} category="h4">{item.name}</Text>
            <Divider/>
            <Text style={styles.text} category="h6">{item.adress}</Text>

            <Text style={{paddingTop: 10}}>{item.info}</Text>
            <TouchableOpacity onPress={() => {handleLinkPress()}}>
            <Text style={styles.link}>{item.url}</Text> 
            </TouchableOpacity>
            <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: item.image}}
                />
          </Layout>
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
  topMenu: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme['color-primary-100'],
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Montserrat-Regular',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  },
  imageBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: 200
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
    marginVertical: 10
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    marginVertical: 10
  },
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
})



