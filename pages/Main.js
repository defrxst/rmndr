import React from "react";
import { Text, TextInput, View, Pressable, BackHandler, Alert } from "react-native";
import { useTailwind } from "tailwind-rn";

function handleBackPress() {
    Alert.alert (
        'Exiting App',
        'Exit rmndr?',
        [
            {
                text: 'Cancel',
                onPress: () => {
                    console.log('Canceled');
                },
                style: 'cancel',
            },
            {
                text: 'Confirm',
                onPress: () => BackHandler.exitApp(),
            },
        ],
        {
            cancelable: false
        },
    );
    return true;
}

const Main = ({navigation}) => {

    const tw = useTailwind();

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);    

    return (
        <View style={tw('items-center justify-center flex')}>
            <Text style={tw('text-3xl font-extrabold p-5')}>Welcome to rmndr.</Text>
        </View>
    )
}

export default Main;