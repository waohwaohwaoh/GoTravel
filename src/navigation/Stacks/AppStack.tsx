import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, HomeScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
export default AppStack;
