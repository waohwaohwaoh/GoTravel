import { R } from '../../utils/R';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

interface MarkerProps {
  color?: keyof typeof R.colors;
}

const originalWidth = 208;
const originalHeight = 242;
const aspectRatio = originalWidth / originalHeight;

const Marker = ({ color = 'primary' }: MarkerProps) => {
  return (
    <View style={{ aspectRatio }}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}>
        <Path
          d="M104.5 242.458A103.872 103.872 0 0 1 .625 138.583c0-43.004 32.778-88.062 96.95-136.191a11.542 11.542 0 0 1 13.85 0c64.172 48.129 96.95 93.187 96.95 136.192A103.875 103.875 0 0 1 104.5 242.458Zm0-69.25a34.624 34.624 0 1 0 .002-69.249 34.624 34.624 0 0 0-.002 69.249Z"
          fill={R.colors[color]}
        />
      </Svg>
    </View>
  );
};

export default Marker;
