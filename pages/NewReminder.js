import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';



export const reminders = [

]

function addReminder() {
    reminders.push({
        title: '',
        description: '',
        date: ''
    })    
}

const NewReminder = ({navigation}) => {

    const [title, setTitle] = React.useState('')

    const tw = useTailwind();
    return (
        <View style={tw('justify-center items-center flex')}>
            <Text style={tw('m-auto font-extrabold text-3xl p-2')}>New Reminder</Text>

            <View>
                <TextInput
                    placeholder='Title'
                    onChangeText={(title) => {setTitle(text)}}
                    style={tw('w=11/12 border-black border-2 rounded-xl')}
                />
            </View>
        </View>
    )
} 

export default NewReminder;