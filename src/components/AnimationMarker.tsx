import { R } from '~/utils/R';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import Marker from './Svg/Marker';

interface AnimationMarkerProps {
  color: keyof typeof R.colors;
  additionalColor: keyof typeof R.colors;
  height: number;
  toggle: Animated.Value<number>;
}

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const AnimationMarker = ({
  color,
  additionalColor,
  height,
  toggle,
}: AnimationMarkerProps) => {
  return (
    <View style={{ height: height }}>
      <Animated.View
        style={[
          {
            height: height,
          },
          styles.absoluteContainer,
        ]}>
        <Marker color={color} />
      </Animated.View>
      <Animated.View
        style={[
          {
            height: toggle.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
            overflow: 'hidden',
          },
          styles.absoluteContainer,
        ]}>
        <Marker color={additionalColor} />
      </Animated.View>
    </View>
  );
};

export default AnimationMarker;
