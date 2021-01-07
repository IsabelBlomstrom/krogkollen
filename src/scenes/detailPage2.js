import React from 'react'
import { StyleSheet, Image, Linking } from 'react-native'
import { Layout, Text, Icon } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import Header from '../components/header'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'


export default function DetailPage({navigation}) {

  const handlePress = () => {
    Linking.openURL('https://www.olstugan.se/lejonet');
  }


  return(
    <Layout style={styles.container}>
      <Header/>
        <TouchableOpacity
        onPress={() => {navigation.pop()}}>
            <Icon fill="#FE9C41" name="arrow-ios-back-outline" style={styles.icon}/>
        </TouchableOpacity>

        <ScrollView>
    <Layout style={styles.container}>
        <Layout style={styles.imageBox}>
        <Layout style={{backgroundColor: theme['color-primary-100']}}>
          <Text style={styles.heading} category="h6">Tullen Lejonet</Text>
            <Text style={styles.infoText}>Här kan det stå lite text om stället som 
            de själva vill att besökare ska få tillgång till. 
            </Text>

            <TouchableOpacity onPress={() => {handlePress()}}>
            <Text style={styles.link}>olstugan.se</Text>
            </TouchableOpacity>
          </Layout>

            
        <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={require('../assets/images/tullen.png')}
                />
        </Layout>

        <Layout style={styles.box}>
            <Text style={styles.heading} category="h6">Hur många är här?</Text>

            <Layout style={styles.statusBar}>
              <Layout style={styles.colorDiv}></Layout>
            </Layout>

            <Text style={styles.quantity} category="h6">110/120</Text>
            <Text style={styles.text}>Just nu är det (110) personer på den här krogen. 
              Enligt våra uppgifter är det (trångt) och just nu har krogen 
              en (röd) nivå.
            </Text>
        </Layout>

        <Layout style={styles.starBox}>
        <Text style={styles.heading} category="h6">Stjärnmärk som favorit</Text>
        <Icon name="star-outline" fill="#FE9C41" style={styles.star}/>
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
    width: 300,
    height: 35,
    backgroundColor: theme['color-danger-400'],
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
    color: theme['color-danger-400']
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