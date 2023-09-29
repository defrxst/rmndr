import React from "react";
import { useTailwind } from "tailwind-rn";
import LoadingScreen from "./Loading";


const Main = () => {
  const tw = useTailwind()

  return (
    <LoadingScreen/>
  )
}

export default Main;
