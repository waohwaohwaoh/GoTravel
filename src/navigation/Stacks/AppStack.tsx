import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TipScreen, SplashScreen } from '~/screens';
import TabStack from './TabBar';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={TabStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="TipScreen" component={TipScreen} />
  </Stack.Navigator>
);
export default AppStack;
