import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { default as theme } from './AppTheme.json'; // <-- Import app theme
import LandingPage from './src/scenes/landingPage';
import {
  useFonts,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

export default function App() {
  useFonts({
    Montserrat_400Regular,
  });

  return (
    <ApplicationProvider {...eva} 
    theme={{ ...eva.dark, ...theme }}>
      <LandingPage />
    </ApplicationProvider>
  );
}
