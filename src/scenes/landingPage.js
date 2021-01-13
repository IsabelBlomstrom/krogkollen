
import React, { useState} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Select, SelectItem, Button} from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme

const cities =  [
    "Göteborg",
    "Stockholm",
    "Malmö"
]

export const LandingPage = ({ navigation }) => {

    const navigateDetails = () => {
      navigation.navigate('HomePage');
    };
  

    const [selectedIndex, setSelectedIndex] = useState({
        title: '',
    });

    const renderOptions = (title) => (
        <SelectItem key={title} title={title} />
    );


    return (
        <Layout style={styles.container}>
        <Image
          style={styles.imgLogo}
          resizeMode="contain"
          source={require('../assets/images/Krogkollen.png')}
        />
        <Text style={styles.text}>Välj stad</Text>
            <Select
                    placeholder={cities[0]}
                    size="large"
                    style={styles.select}
                    value={selectedIndex.cities}
                    onSelect={(index) => {
                        setSelectedIndex({
                        cities: cities[index.row],
                        });
                    }}>
                    {cities.map(renderOptions)}
            </Select>
        {selectedIndex.cities === 'Malmö' || selectedIndex.cities === 'Stockholm' ? (
                <Layout style={{backgroundColor: theme['color-primary-100']}}>
                <Text style={{color: theme['color-danger-400'], marginHorizontal: 15, paddingTop: 15}}>Kommer inom kort</Text>
                <Button 
                disabled="true"
                size="medium"
                style={styles.button}
                >
                <Text
                    category="h6" 
                    style={styles.buttonText}>Gå vidare</Text>
                </Button>
                </Layout>
            ) : ( 
                <Button 

                size="medium"
                style={styles.button}
                onPress={() => {
                    navigateDetails();
                }}
                >
                <Text
                    category="h6" 
                    style={styles.buttonText}>Gå vidare</Text>
              </Button>
             )}

      </Layout>
   )     
}




const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
},
imgLogo: {
    alignSelf: "center",
    marginTop: 50, 
},
select: {
    width: 300,
    alignSelf: "center",
},
button: {
    marginTop: 40,
    backgroundColor: theme['color-info-500'],
    marginHorizontal: 10,
},
text: {
    marginBottom: 20,
    marginHorizontal: 15,
    fontFamily: 'Montserrat_400Regular', 
    color:"white"
},
buttonText: {
    fontFamily: 'Montserrat_400Regular',
    margin: 0,
},
})