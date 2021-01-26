import React, {useState} from 'react'
import { StyleSheet, Linking, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert
} from 'react-native'
import { Layout, Text, Icon, Divider, Input, Button } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import  app  from '../base';
import { useAuth } from '../authContext';
import AdminHeader from '../components/adminHeader'

export default function EditPageAdmin({route, navigation}) {
  const { item } = route.params
  const [newName, setNewName] = useState(item.name)
  const [pubInfo, setPubInfo] = useState(item.info)
  const [changeAdress, setChangeAdress] = useState(item.adress)
  const [changeUrl, setChangeUrl] = useState(item.url)
  const [error, setError] = useState("")
  const { logout } = useAuth();
  const [beenPressed, setBeenPressed] = useState(true)

const onUpdatePubInfo = () => {
    const db = app.firestore()
    let urlRef = db.collection("pub").doc(item.id);
      let setWithMerge = urlRef.update({
        name: newName,
        url: changeUrl,
        adress: changeAdress,
        info: pubInfo,
  
    });
    setTimeout(() => {
    Alert.alert("Ändringar sparade")
    }, 1000)
    return setWithMerge;
  }


  async function handleLogOut () {
    setError("")
    try {
      await logout();
      navigation.navigate("LandingPage")
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
          <Icon fill="#FE9C41" style={styles.logoutIcon} name='log-out-outline'/>
        </TouchableOpacity>
      <AdminHeader/>
    <Layout style={styles.topMenu}>
    <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>
        <Text category="h6" style={styles.textCurrent}>Redigera krog</Text>
        <Icon name="edit-outline" fill="#FE9C41" style={styles.icon}/>
        
    </Layout> 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
        behavior={"padding"}
        style={{flex: 1, paddingTop: 10
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
            <Input style={styles.link}
              onChangeText={(urlInfo) => {
              setChangeUrl(urlInfo);
            }} 
              >{item.url}</Input>            
            </Layout>
            <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={{uri: item.image}}
                /> 
                  </ScrollView> 
    </KeyboardAvoidingView> 
    </TouchableWithoutFeedback>
            <Button
            disabled={!beenPressed}
            size="medium"
            style={styles.button}
            onPress={() => {
              onUpdatePubInfo();
              setBeenPressed(false)
              setTimeout(() => {
                setBeenPressed(true)
              }, 1000)
            }}
            >
              <Text style={styles.buttontext} category="h6">Spara ändringar</Text>
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
    alignItems: 'center'
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    color: theme['color-info-500'],
    textDecorationLine: 'underline',
    alignSelf: 'center'
  },
  imageBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: 200
  },
  imgLogo: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    marginVertical: 10
  },
  link: {
    color: theme['color-info-500'],
    paddingTop: '3%'
  },
  button: {
    marginVertical: 40,
    marginHorizontal: 10,
    backgroundColor: theme['color-info-500'],
    fontFamily: 'Montserrat-Regular', 
  },
  buttontext: {
    fontFamily: 'Montserrat_400Regular',
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  logoutIcon: {
      height: 30,
      width: 30,
      alignSelf: "flex-end",
      marginTop: 40,
      marginRight: 10,
  }
})



