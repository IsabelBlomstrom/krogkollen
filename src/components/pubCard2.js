import React from 'react'
import { Layout, Text} from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';

export default function PubCard({ navigation }) {

    const navigateDetails = () => {
        navigation.navigate('DetailPage');
      };

    return(
        <Layout style={styles.container}>
            <TouchableOpacity
            onPress={() => {
                navigateDetails();
              }}>
            <Layout style={styles.pubCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}>
                    <Text category="h5" style={styles.text}>Tullen Lejonet</Text>
                    <Text style={styles.text}>Friggagatan 27</Text>
                    <Text style={styles.quantity}>110/120</Text>
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={require('../assets/images/tullen.png')}
                />
            </Layout>
            </TouchableOpacity>
        </Layout>
    )
} 

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
    flexDirection: "column",
},
text: {
    fontFamily: 'Montserrat_400Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
},
quantity: {
  fontFamily: 'Montserrat_400Regular', 
  marginVertical: 10,
  marginHorizontal: 10,
  color: theme['color-danger-400']
},
pubCard: {
    backgroundColor: theme['color-primary-500'],
    marginHorizontal: 10,
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