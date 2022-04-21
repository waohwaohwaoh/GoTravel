module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
