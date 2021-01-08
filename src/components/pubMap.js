import React from 'react'
import { Layout } from '@ui-kitten/components';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import MapView, { Callout, Marker } from 'react-native-maps';


export default function PubMap() {
  return(
      <Layout style={styles.container}>
          <MapView
          style={styles.map}
      initialRegion={{
      latitude: 57.708870,
      longitude: 11.974560,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
      <Marker
      title="Tullen Lejonet"
      coordinate={{
        latitude: 57.71250,
        longitude: 11.991
      }}
      >
         <Image source={require('../assets/images/marker.png')} style={{height: 40, width:25 }} />

        </Marker>

        <Marker
        title="Ölkompaniet"
    coordinate={{
      latitude: 57.71490,
      longitude: 12.0045
    }}
    />
        <Marker
        title="Lilla restaurangen"
    coordinate={{
      latitude: 57.71470,
      longitude: 11.998
    }}
    />
    </MapView>
      </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: theme['color-primary-100'],

  },
  map: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 40,
    height: Dimensions.get('window').height/2,
  },
  callout: {
    width: 100,
    height: 50,

  }
})