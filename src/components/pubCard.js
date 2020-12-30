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
                    <Text category="h5" style={styles.text}>Ölcompaniet</Text>
                    <Text style={styles.text}>Danska vägen 110</Text>
                    <Text style={styles.text}>50/150</Text>
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={require('../assets/images/olkompaniet.png')}
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
pubCard: {
    backgroundColor: theme['color-primary-500'],
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 5,
},
imgLogo: {
    height: 100,
    width: 100,
},
})