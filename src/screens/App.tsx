import { AppStack } from '../navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { R } from '../utils/R';
const appFont = {
  ios: {
    regular: {
      fontFamily: 'Roboto',
    },
    bold: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    medium: {
      fontFamily: 'Roboto',
    },
    light: {
      fontFamily: 'Roboto',
    },
    thin: {
      fontFamily: 'Roboto',
    },
  },
  android: {
    regular: {
      fontFamily: 'Roboto',
    },
    bold: {
      fontFamily: 'Roboto',
    },
    medium: {
      fontFamily: 'Roboto',
    },
    light: {
      fontFamily: 'Roboto',
    },
    thin: {
      fontFamily: 'Roboto',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2196F3',
    surface: '#ffffff',
    underlineColor: 'rgba(0, 0, 0, 0.23)',
    error: R.colors.red_light,
  },
  fonts: configureFonts(appFont),
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
