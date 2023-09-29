import React, { useRef } from "react";
import { useTailwind } from "tailwind-rn";
import { Animated, Text } from "react-native";

const fadeIn = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  return  (
  <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
    {props.children}
  </Animated.View>
  )
}

const LoadingScreen = () => {
  const tw = useTailwind()
  return(
    <fadeIn style={tw('m-auto w-fit h-fit')}>
      <Text style={tw('text-3xl text-black font-extrabold')}>rmndr.</Text>
    </fadeIn>
  )
}

export default LoadingScreen
