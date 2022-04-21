import { R } from '~/utils/R';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import YaMap, { Marker } from 'react-native-yamap';
const styles = StyleSheet.create({});
// YaMap.setLocale('ru_RU');
const SearchScreen = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <YaMap
        userLocationIcon={{
          uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png',
        }}
        style={{ flex: 1 }}>
        <Marker point={{ lat: 50, lon: 50 }} />
      </YaMap>
      <View
        style={{
          position: 'absolute',
          top: 24,
          left: 16,
          right: 16,
          height: 36,
        }}>
        <Searchbar
          value="wwsa"
          style={{ height: 36 }}
          inputStyle={{
            fontSize: 16,
            lineHeight: 16,
            padding: 0,
            color: R.colors.black,
          }}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
