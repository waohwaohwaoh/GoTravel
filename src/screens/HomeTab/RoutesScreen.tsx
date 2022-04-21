import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({});

const RoutesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://vk.com/groups' }} />
    </View>
  );
};

export default RoutesScreen;
