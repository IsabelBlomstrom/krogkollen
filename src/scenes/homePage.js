import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';
import PubCard2 from '../components/pubCard2'
import PubCard3 from '../components/pubCard3'
import Header from '../components/header'


export default function HomePage({ navigation }) {

    const navigateDetails = () => {
        navigation.navigate('FavoritesPage');
      };

    return(
        <Layout style={styles.container}>
            <Header/>
         <Layout style={styles.rowBox}>
             <Text style={styles.textCurrent}>Listvy</Text>
             <Text style={styles.text}>Kartvy</Text>
        </Layout>
            <PubCard navigation={navigation}/>
            <PubCard2 navigation={navigation}/>
            <PubCard3 navigation={navigation}/>

            <Button 
            size="medium"
            style={styles.button}
            onPress={() => {
                navigateDetails();
              }}
            >
            <Text
                category="h6" 
                style={styles.buttonText}>Favoriter</Text>
        </Button>

        </Layout>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    justifyContent: "center"
},
button: {
    marginBottom: 100,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
},
rowBox: {
    marginTop: 50,
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%'
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  }
})


