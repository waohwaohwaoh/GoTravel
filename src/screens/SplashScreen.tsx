import { R } from '../utils/R';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { AnimationMarker } from '../components';
import { Text } from 'react-native-paper';
import Animated, { useValue, EasingNode } from 'react-native-reanimated';

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

  const rotateRightAnimation = useCallback(() => {
    Animated.timing(rightRotate, {
      toValue: 110,
      duration: 50,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(rightTranslateX, {
      toValue: -20,
      duration: 200,
      easing: EasingNode.linear,
    }).start();
    Animated.timing(rightTranslateY, {
      toValue: -(defaultMarkerScaleH * height) + 10,
      duration: 200,
      easing: EasingNode.linear,
    }).start();
  }, [rightRotate, rightTranslateX, rightTranslateY]);

  const rotateLeftAnimation = useCallback(() => {
    Animated.timing(leftRotate, {
      toValue: 0,
      duration: 50,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(leftTranslateX, {
      toValue: 20,
      duration: 200,
      easing: EasingNode.linear,
    }).start();
    Animated.timing(leftTranslateY, {
      toValue: defaultMarkerScaleH * height - 10,
      duration: 200,
      easing: EasingNode.linear,
    }).start(() => {
      Animated.timing(focusAnim, {
        toValue: 1,
        duration: 700,
        easing: EasingNode.ease,
      }).start();
    });
  }, [leftRotate, leftTranslateX, leftTranslateY, focusAnim]);

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
      rotateRightAnimation();
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
    rotateRightAnimation,
    rotateLeftAnimation,
  ]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  console.log(rightScale);

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
