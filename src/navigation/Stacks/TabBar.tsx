import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { R } from '~/utils/R';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchScreen, RoutesScreen, ProfileScreen } from '~/screens';

const Tab = createMaterialBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Remarks'}
      inactiveColor={R.colors.black}
      activeColor={R.colors.primary}
      shifting={false}
      barStyle={{ backgroundColor: R.colors.white }}>
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: R.string.tab.search,
          tabBarIcon: ({ color }) => (
            <Ionicons name="magnify" color={color} size={24} />
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="Route"
        options={{
          tabBarLabel: R.string.tab.routes,
          tabBarIcon: ({ color }) => (
            <Ionicons name="routes" color={color} size={24} />
          ),
        }}
        component={RoutesScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: R.string.tab.profile,
          tabBarIcon: ({ color }) => (
            <Ionicons name="account-outline" color={color} size={24} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
