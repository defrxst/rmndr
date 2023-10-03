import React from 'react';
import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';


function addReminder() {
    
}

const NewReminder = ({navigation}) => {
    const tw = useTailwind();
    return (
        <Text style={tw('m-auto')}>New Reminder page</Text>
    )
} 

export default NewReminder;