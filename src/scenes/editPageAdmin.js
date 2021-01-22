import React, {useState, useEffect} from 'react'
import { StyleSheet, Linking, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert, Dimensions
} from 'react-native'
import { Layout, Text, Icon, Divider, Input, Button } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import Header from '../components/header'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import  app  from '../base';
import { useAuth } from '../authContext';
import AdminHeader from '../components/adminHeader'

export default function EditPageAdmin({route, navigation}) {
  const { item } = route.params;
  const [newName, setNewName] = useState(item.name);
  const [pubInfo, setPubInfo] = useState(item.info);
  const [changeAdress, setChangeAdress] = useState(item.adress);
  const [changeUrl, setChangeUrl] = useState(item.url)

  const handleLinkPress = () => {
    Linking.openURL(`${item.url}`);
  }

const onUpdatePubInfo = () => {
    const db = app.firestore()
    let urlRef = db.collection("pub").doc(item.id);
      let setWithMerge = urlRef.update({
        name: newName,
        url: changeUrl,
        adress: changeAdress,
        info: pubInfo,
  
    });
    Alert.alert("Ändringar sparade")
    return setWithMerge;
  }

  return(
    <Layout style={styles.container}>
      <AdminHeader/>
    <Layout style={styles.topMenu}>
   
    <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>
        <Text category="h6" style={styles.heading}>Redigera krog</Text>
        <Icon name="edit-outline" fill="#FE9C41" style={styles.icon}/>
        
    </Layout> 
    <KeyboardAvoidingView
        behavior={"position"}
        style={{flex: 1, 
          paddingTop: 10,    
      }}
       >
    <ScrollView 
    contentContainerStyle={{
      flexGrow: 1,
    }}>          
          <Layout style={{backgroundColor: theme['color-primary-100'], marginVertical: 10, marginHorizontal: 10}}>
            <Input style={styles.text} category="h4"
            onChangeText={(name) => {
              setNewName(name);
            }}>{item.name}</Input>
            <Divider/>
            <Input 
            size="medium"             
            style={styles.text} category="h6"
            onChangeText={(adressUpdate) => {
              setChangeAdress(adressUpdate);
            }}>{item.adress}</Input>
            <Input 
            size="large"         
            multiline={true}
            maxLength={200}
            onChangeText={(pub) => {
              setPubInfo(pub);
            }}
            >{item.info}</Input>
            <TouchableOpacity onPress={() => {handleLinkPress()}}>
            <Input style={styles.link}
              onChangeText={(urlInfo) => {
              setChangeUrl(urlInfo);
            }} 
              >{item.url}</Input> 
            </TouchableOpacity>
           
            </Layout>
            <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: item.image}}
                /> 
                  </ScrollView> 
    </KeyboardAvoidingView> 
            <Button
            size="medium"
            style={styles.button}
            onPress={() => {
              onUpdatePubInfo();
             
            }}
            >
              <Text style={styles.buttontext}>Spara ändringar</Text>
              </Button>
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
    alignSelf: "center",
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    marginVertical: 10
  },
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
  button: {
    marginTop: 20,
    marginBottom: 20, 
    marginHorizontal: 20,
    backgroundColor: theme['color-info-500'],
    fontFamily: 'Montserrat-Regular', 
  },
  buttontext: {
    fontFamily: 'Montserrat-Regular',
  },
})



