
import React, { useState} from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Select, SelectItem, Button, Icon } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import LoginAdmin from './landingPageAdmin'
import { TouchableOpacity } from 'react-native-gesture-handler';

const cities =  [
    "Göteborg",
    "Stockholm",
    "Malmö"
]

export const LandingPage = ({ navigation }) => {

    const navigateDetails = () => {
      navigation.navigate('HomePage');
    };

      
  const goToLoginPage = () => {
    navigation.navigate('LandingPageAdmin');
  };
  

    const [selectedIndex, setSelectedIndex] = useState({
        title: '',
    });

    const renderOptions = (title) => (
        <SelectItem key={title} title={title} />
    );


    return (
        <Layout style={styles.outerContainer}>
        <TouchableOpacity
        onPress={() => {
            goToLoginPage();
        }}>
             <Icon name="log-in-outline" fill="#FE9C41" style={styles.icon}/>
        </TouchableOpacity>
        <Layout style={styles.container}>
        <Image
          style={styles.imgLogo}
          resizeMode="contain"
          source={require('../assets/images/krogkollen.png')}
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
      </Layout>
   )     
}

const styles = StyleSheet.create({
outerContainer: {
    flex: 2,
    backgroundColor: theme['color-primary-100'],
    },
container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
    justifyContent: 'center'
},
imgLogo: {
    alignSelf: "center",
    width: 250,
},
icon: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
    marginTop: 40
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