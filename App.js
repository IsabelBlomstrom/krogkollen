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
import { AuthProvider } from './src/authContext';


export default function App() {
  useFonts({ // lägg i en useEffect
    Montserrat_400Regular,
  });
  useFonts();


  return (
    <ApplicationProvider {...eva} 
    theme={{ ...eva.dark, ...theme }}>
      <AuthProvider>
      <IconRegistry icons={EvaIconsPack} />
        <AppNavigator/>
        </AuthProvider>
    </ApplicationProvider>
  );
}
