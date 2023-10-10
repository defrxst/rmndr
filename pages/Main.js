import React from "react";
import { Text, TextInput, View, Pressable, BackHandler, Alert } from "react-native";
import { useTailwind } from "tailwind-rn";
import { reminders } from "./NewReminder";

export function handleBackPress() {
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

    const reminderList = reminders?.map(reminder => 
        <Pressable style={tw('p-2 border-2 border-black w-11/12 rounded-xl')}>
            <Text style={tw('text-black m-auto')}>{reminder.title}</Text>
        </Pressable>
    )
    
    return (
        <View style={tw('items-center justify-center flex')}>
            <Text style={tw('text-3xl font-extrabold p-5')}>Welcome to rmndr.</Text>

            <Pressable onPress={()=>navigation.navigate('NewReminder')} style={tw('border-2 w-11/12 border-black p-2 rounded-xl')}>
                <Text style={tw('m-auto font-extrabold')}>New Reminder</Text>
            </Pressable>

            <View>{reminderList}</View>

        </View>
    )
}

export default Main;