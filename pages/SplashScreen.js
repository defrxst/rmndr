import React, { Component, useEffect } from "react";
import { useTailwind } from "tailwind-rn";
import { Text } from "react-native";

const SplashScreen = ({navigation}) => {

    const tw = useTailwind();

    setTimeout(()=> {
        navigation.navigate('Main');
    }, 5000);

    React.useEffect(
        () =>
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
    )

    return (
        <Text style={tw('m-auto text-4xl font-extrabold')}>rmndr.</Text>
    )


}

export default SplashScreen;