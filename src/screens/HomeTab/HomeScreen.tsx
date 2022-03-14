import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text> {'kekekek'}</Text>
    </View>
  );
};

export default HomeScreen;
