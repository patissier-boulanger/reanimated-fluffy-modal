import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  withSpring,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';

import {ModalHandle, FluffyModalPropsType} from './types';

export const FluffyModal = forwardRef<ModalHandle, FluffyModalPropsType>(
  (props, ref) => {
    const {modalHeight, children} = props;

    const {height: screenHeight} = useWindowDimensions();
    const [showModal, setShowModal] = useState(false);

    const backgroundColor = useSharedValue(0);
    const modalBottom = useSharedValue(0);

    const handleExitBottomSheet = () => {
      setShowModal(false);
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        setShowModal(true);
      },
      close: () => {
        modalBottom.value = withSpring(-modalHeight, {
          damping: 80,
          overshootClamping: true,
          restDisplacementThreshold: 0.1,
          restSpeedThreshold: 0.1,
          stiffness: 500,
        });

        backgroundColor.value = withTiming(
          0,
          {
            duration: 250,
            easing: Easing.linear,
          },
          finished => {
            if (finished) {
              runOnJS(handleExitBottomSheet)();
            }
          },
        );
      },
    }));

    useEffect(() => {
      if (showModal) {
        backgroundColor.value = withTiming(1, {
          duration: 250,
          easing: Easing.linear,
        });

        modalBottom.value = withSpring(screenHeight / 2 - modalHeight / 2, {
          damping: 80,
          overshootClamping: true,
          restDisplacementThreshold: 0.1,
          restSpeedThreshold: 0.1,
          stiffness: 500,
        });
      }
    }, [showModal, backgroundColor, modalBottom, modalHeight, screenHeight]);

    const backdropAnimatedStyle = useAnimatedStyle(() => {
      return {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
        opacity: backgroundColor.value,
        zIndex: 1,
      };
    });

    const modalAnimatedStyle = useAnimatedStyle(() => {
      return {
        position: 'absolute',
        alignSelf: 'center',
        bottom: modalBottom.value,
        zIndex: 2,
      };
    });

    return (
      <>
        {showModal ? (
          <>
            <Animated.View style={backdropAnimatedStyle} />
            <Animated.View style={modalAnimatedStyle}>{children}</Animated.View>
          </>
        ) : (
          <></>
        )}
      </>
    );
  },
);
