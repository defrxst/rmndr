import React from "react";
import { useTailwind } from "tailwind-rn";
import { Text } from "react-native";


const LoadingScreen = () => {
  const tw = useTailwind()
  return(
    <Text style={tw('text-black text-4xl font-extrabold m-auto')}>rmndr.</Text>
  )
}

export default LoadingScreen
