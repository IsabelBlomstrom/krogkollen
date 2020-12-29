import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { default as theme } from './AppTheme.json'; // <-- Import app theme
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import {AppNavigator} from './src/navigation/appNavigation';

export default function App() {
  useFonts({ // lägg i en useEffect
    Montserrat_400Regular,
  });
  useFonts();

  return (
    <ApplicationProvider {...eva} 
    theme={{ ...eva.dark, ...theme }}>
      <AppNavigator/>
    </ApplicationProvider>
  );
}
