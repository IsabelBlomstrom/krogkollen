import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';


export default function HomePage({ navigation }) {

    const navigateDetails = () => {
        navigation.navigate('FavoritesPage');
      };

    return(
        <Layout style={styles.container}>
                <Layout style={styles.rowBox}>
                <Text style={styles.textCurrent}>Listvy</Text>
          <Text style={styles.text}>Kartvy</Text>
        </Layout>
            <PubCard navigation={navigation}/>
            <PubCard navigation={navigation}/>

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
    justifyContent: "center",
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
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


