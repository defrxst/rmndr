import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import LoadingScreen from "./Loading";


const Main = () => {
  const tw = useTailwind()

  return (
    <LoadingScreen/>
  )
}

export default Main;
