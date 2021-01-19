// import React, { useState, useEffect } from 'react'
// import { Layout, Text } from '@ui-kitten/components';
// import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { default as theme } from '../../AppTheme.json';
// import MapView, { Callout, Marker } from 'react-native-maps';
// import app from '../base';


// export default function PubMap({ navigation }) {

//   const [pubs, setPub] = useState([])

//   useEffect(() => {
//       const fetchData = async () => {
//           const db = app.firestore()
//           const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
//           const url = ref.child('image.png');
//           db.collection('pub')
//           .onSnapshot((snapShot) => {
//               const newPub = snapShot.docs.map((doc) => ({
//                   id: doc.id,
//                   url,
//                   ...doc.data()
//               }))
//               setPub(newPub)
//           })
//       }
//       fetchData();
//   }, [])

//   const navigateDetails = (pub) => {
//       navigation.navigate('DetailPage', {item: pub},
//       );
//     };
//   return(
//       <Layout style={styles.container}>
//           <MapView
//           style={styles.map}
//           initialRegion={{
//           latitude: 57.708870,
//           longitude: 11.974560,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//     }}
//   >

// {/*MARKER AND CALLOUT FOR ALL PUBS */}
// {pubs.map(pub => 

//      <Marker
//       coordinate={{
//         latitude: pub.coordinate.latitude,
//         longitude: pub.coordinate.longitude
//       }}
//       >
//              <Callout 
//               key={pub.id}
//               style={{justifyContent: 'center'}}
//               width={150} height={80}
//               onPress={() => {
//               navigateDetails(pub);
//               }}>
//            <TouchableOpacity>
//                <Text
//                 category="h6"
//                 style={styles.text}
//                 >
//                 {pub.name}</Text>
//                 <Text
//                 style={styles.text}>
//                 {pub.adress}</Text>
//                 <Text
//                 style={styles.text}>
//                 {pub.quantity}/{pub.maxQuantity}</Text>
//            </TouchableOpacity>
//           </Callout>
//         </Marker>
//        )}
//      </MapView>
//    </Layout>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: theme['color-primary-100'],

//   },
//   map: {
//     justifyContent: 'center',
//     marginHorizontal: 10,
//     marginVertical: 10,
//     height: Dimensions.get('window').height/2,
//   },
// text: {
//   fontFamily: 'Montserrat_400Regular', 
//   color: 'black',
// },
// })