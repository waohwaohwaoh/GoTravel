import { AppStack } from '../navigation/index';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
