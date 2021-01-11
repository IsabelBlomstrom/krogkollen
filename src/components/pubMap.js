import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { default as theme } from '../../AppTheme.json';
import MapView, { Callout, Marker } from 'react-native-maps';


export default function PubMap({ navigation }) {

  const navigateDetails = () => {
    navigation.navigate('DetailPage');
  };


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

{/*MARKER AND CALLOUT FOR TULLEN LEJONET */}
      <Marker
      title="Tullen Lejonet"
      coordinate={{
        latitude: 57.71250,
        longitude: 11.991
      }}
      >
             <Callout 
        style={{justifyContent: 'center'}}
        width={150} height={80}
        onPress={() => {
        navigateDetails();
        }}>
           <TouchableOpacity>
               <Text
                category="h6"
                style={styles.text}
                >
                Tulllen Lejonet</Text>
                <Text
                style={styles.text}>
                Friggatan 27</Text>
                <Text
                style={styles.text}>
                110/120</Text>
           </TouchableOpacity>
      </Callout>
       </Marker>

{/*MARKER AND CALLOUT FOR ÖLKOMPANIET */}
    <Marker
        coordinate={{
        latitude: 57.71490,
        longitude: 12.0045
        }}>
     <Callout 
        style={{justifyContent: 'center'}}
        width={150} height={80}
        onPress={() => {
        navigateDetails();
        }}>
           <TouchableOpacity>
               <Text
                category="h6"
                style={styles.text}
                >
                Ölkompaniet</Text>
                <Text
                style={styles.text}>
                Danska vägen 110</Text>
                <Text
                style={styles.text}>
                50/150</Text>
           </TouchableOpacity>
      </Callout>
    </Marker>


{/*MARKER AND CALLOUT FOR LILLA RESTAURANGEN */}
        <Marker
        title="Lilla restaurangen"
        coordinate={{
        latitude: 57.71470,
        longitude: 11.998
    }}>
           <Callout 
        style={{justifyContent: 'center'}}
        width={150} height={80}
        onPress={() => {
        navigateDetails();
        }}>
           <TouchableOpacity>
               <Text
                category="h6"
                style={styles.text}
                >
                Lilla Restaurangen</Text>
                <Text
                style={styles.text}>
                Redbergsvägen 8</Text>
                <Text
                style={styles.text}>
                70/100</Text>
           </TouchableOpacity>
      </Callout>
      </Marker>
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
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    height: Dimensions.get('window').height/2,
  },
text: {
  fontFamily: 'Montserrat_400Regular', 
  color: 'black',
},
})