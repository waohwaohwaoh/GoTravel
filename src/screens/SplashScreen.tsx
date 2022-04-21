import { R } from '~/utils/R';
import React, { useCallback, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import AnimationMarker from '~/components/AnimationMarker';
import { Text } from 'react-native-paper';
import Animated, { useValue, EasingNode } from 'react-native-reanimated';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppStackRoutes } from '~/navigation/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.primary,
  },
});

const { width, height } = Dimensions.get('screen');

const defaultMarkerScaleW = 0.35;
const defaultMarkerScaleH = 0.25;

const SplashScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackRoutes, 'SplashScreen'>>();

  const textOpacity = useValue(0);
  const focusAnim = useRef(new Animated.Value(0)).current;
  // left animation
  const leftTranslateX = useValue(500);
  const leftTranslateY = useValue(200);
  const leftScale = useValue(0.2);
  const leftRotate = useValue(110);
  // right animation
  const rightTranslateX = useValue(500);
  const rightTranslateY = useValue(200);
  const rightScale = useValue(0.2);
  const rightRotate = useValue(0);

  const rotateLeftAnimation = useCallback(() => {
    Animated.timing(leftTranslateX, {
      toValue: 20,
      duration: 300,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start();
    Animated.timing(rightTranslateX, {
      toValue: -20,
      duration: 300,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start();
    Animated.timing(leftRotate, {
      toValue: 0,
      duration: 50,
      easing: EasingNode.linear,
    }).start();
    Animated.timing(rightRotate, {
      toValue: -110,
      duration: 50,
      easing: EasingNode.linear,
    }).start();
    Animated.timing(rightTranslateY, {
      toValue: -(defaultMarkerScaleH * height) + 10,
      duration: 300,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start();
    Animated.timing(leftTranslateY, {
      toValue: defaultMarkerScaleH * height - 10,
      duration: 300,
      easing: EasingNode.inOut(EasingNode.ease),
    }).start(() => {
      Animated.timing(focusAnim, {
        toValue: 1,
        duration: 500,
        easing: EasingNode.ease,
      }).start(async () => {
        try {
          const showTip = await AsyncStorage.getItem('ShowTip');
          if (showTip === null) {
            await AsyncStorage.setItem('ShowTip', 'true');
          }
          setTimeout(
            () =>
              navigation.navigate(showTip != null ? 'HomeScreen' : 'TipScreen'),
            1500,
          );
        } catch (e) {
          // error reading value
        }
      });
    });
  }, [
    leftRotate,
    leftTranslateX,
    leftTranslateY,
    focusAnim,
    navigation,
    rightRotate,
    rightTranslateX,
    rightTranslateY,
  ]);

  const startAnimation = useCallback(() => {
    // Выдвижение при старте
    // left
    Animated.timing(leftTranslateX, {
      toValue: 20,
      duration: 850,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(leftTranslateY, {
      toValue: -10,
      duration: 850,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(leftScale, {
      toValue: 1,
      duration: 850,
      easing: EasingNode.linear,
    }).start();
    // right
    Animated.timing(rightTranslateX, {
      toValue: 20,
      duration: 850,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(rightTranslateY, {
      toValue: -10,
      duration: 850,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(rightScale, {
      toValue: 1,
      duration: 850,
      easing: EasingNode.linear,
    }).start();
    // text
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      easing: EasingNode.exp,
    }).start(() => {
      rotateLeftAnimation();
    });
  }, [
    textOpacity,
    leftTranslateX,
    rightTranslateX,
    rightTranslateY,
    leftTranslateY,
    rightScale,
    leftScale,
    rotateLeftAnimation,
  ]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: defaultMarkerScaleW * width,
          height: defaultMarkerScaleH * height,
          transform: [
            { rotate: leftRotate },
            {
              translateX: leftTranslateX,
            },
            {
              translateY: leftTranslateY,
            },
            {
              scale: leftScale,
            },
          ],
        }}>
        <AnimationMarker
          color={'white'}
          additionalColor={'secondary'}
          height={defaultMarkerScaleH * height}
          toggle={focusAnim}
        />
      </Animated.View>
      <Animated.View
        style={{
          width: defaultMarkerScaleW * width,
          height: defaultMarkerScaleH * height,
          transform: [
            {
              translateX: rightTranslateX,
            },
            {
              translateY: rightTranslateY,
            },
            {
              scale: rightScale,
            },
            {
              rotate: rightRotate,
            },
          ],
        }}>
        <AnimationMarker
          color={'secondary'}
          additionalColor={'white'}
          height={defaultMarkerScaleH * height}
          toggle={focusAnim}
        />
      </Animated.View>
      <Animated.View
        style={{
          marginTop: 24,
          opacity: textOpacity,
        }}>
        <Text
          style={{
            fontSize: 48,
            color: 'white',
            fontWeight: '700',
          }}>
          {'GoTravel'}
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
