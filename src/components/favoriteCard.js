import React from 'react'
import { Layout, Text} from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';

export default function FavoriteCard({navigation}) {

    const navigateDetails = () => {
    navigation.navigate('DetailPage');
  };

  return(
    <Layout style={styles.container}>
                  <TouchableOpacity
            onPress={() => {
                navigateDetails();
              }}>
            <Layout style={styles.favoriteCard}>
                <Layout style={{backgroundColor: theme['color-primary-500'], borderRadius: 5}}>
                    <Text category="h5" style={styles.text}>Ölkompaniet</Text>
                    <Text style={styles.text}>Danska vägen 110</Text>
                    <Text style={styles.text}>50/150</Text>
                </Layout>
                <Image
                    style={styles.imgLogo}
                    resizeMode="contain"
                    source={require('../assets/images/olkompaniet.png')}
                />
                <Text>X</Text>
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
  },
  text: {
      fontFamily: 'Montserrat_400Regular', 
      marginVertical: 10,
      marginHorizontal: 10,
  },
  favoriteCard: {
      backgroundColor: theme['color-primary-500'],
      marginHorizontal: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 5,
      padding: 10
  },
  imgLogo: {
      height: 100,
      width: 100,
  },
  })