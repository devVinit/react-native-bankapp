import * as React from 'react';
import { Animated, StyleSheet } from "react-native";
import LoaderSvg from '../assets/svgs/LoaderSvg';

const LoginLoader = () => {
  const rotateRef = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateRef, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        backgroundColor: "transparent",
        transform: [
          {
            rotate: rotateRef.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
    >
      <LoaderSvg />
    </Animated.View>
  );
};

export default LoginLoader;