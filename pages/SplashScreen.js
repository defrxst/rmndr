import React from "react";
import { useTailwind } from "tailwind-rn";

const SplashScreen = () => {
    const tw = useTailwind();
    return (
        <Text style={tw('text-6xl text-black font-extrabold m-auto')}>rmndr.</Text>
    )
}

export default SplashScreen;