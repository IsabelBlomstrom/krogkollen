import React from 'react'
import { Layout, Text} from '@ui-kitten/components';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import PubCard from '../components/pubCard';

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
          <PubCard/>
            </Layout>
            </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
      justifyContent: "center",
      backgroundColor: theme['color-primary-100'],
      alignContent: "center",
  },
  text: {
      fontFamily: 'Montserrat-Regular', 
      marginVertical: 10,
      marginHorizontal: 10,
  },
  quantity: {
    fontFamily: 'Montserrat-Regular', 
    marginVertical: 10,
    marginHorizontal: 10,
    color: theme['color-success-400']
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