import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
  parametr: any;
}

const styles = StyleSheet.create({});

const TipScreen = ({ parametr }: ComponentProps) => {
  return (
    <View>
      <Text>{'TIPS'}</Text>
    </View>
  );
};

export default TipScreen;
