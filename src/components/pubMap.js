import React from 'react'
import { Layout, Input, Icon } from '@ui-kitten/components';
import { StyleSheet, Dimensions } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import MapView from 'react-native-maps';


export default function PubMap() {
  return(
      <Layout style={styles.container}>
          <MapView
          style={styles.map}
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  map: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 40,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  }
})