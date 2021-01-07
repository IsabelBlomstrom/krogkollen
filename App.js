import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { default as theme } from './AppTheme.json'; // <-- Import app theme
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import {AppNavigator} from './src/navigation/appNavigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import firebase from './src/firebase';

// firebase.firestore().collection('pub').add({
//   name: 'isabel',
//   adress: 'blabla',
//   quantity: '30/20'
// })

export default function App() {
  useFonts({ // lägg i en useEffect
    Montserrat_400Regular,
  });
  useFonts();


  return (
    <ApplicationProvider {...eva} 
    theme={{ ...eva.dark, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />
        <AppNavigator/>
    </ApplicationProvider>
  );
}
