import React, {useState} from 'react';
import { BackHandler, Button, Pressable, Text, TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { handleBackPress } from './Main';
import DatePicker from 'react-native-date-picker';


export var reminders = [
]



const NewReminder = ({navigation}) => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = useState(new Date())

    function addReminder() {
        reminders.push({
                reminderTitle: title,
                reminderDate: date, 
                reminderDescription: description
        })    
    }

    const tw = useTailwind();
    return (
        <View style={tw('justify-center items-center flex')}>
            <Text style={tw('m-auto font-extrabold text-3xl p-2')}>New Reminder</Text>

            <View>
                <TextInput
                    placeholder='Title'
                    onChangeText={(textTitle) => {setTitle(textTitle)}}
                    style={tw('w=11/12 border-black border-2 rounded-xl')}
                />
                <TextInput
                    placeholder='Description'
                    onChangeText={(textDescription) => {setDescription(textDescription)}}
                    style={tw('w=11/12 border-black mt-2 border-2 rounded-xl')}
                />

                <DatePicker date={date} onDateChange={setDate} />

                <Pressable onPress={()=>addReminder(title, description)}>
                    <Text style={tw('p-2 text-black border-2 rounded-xl')}>Add Reminder</Text>
                </Pressable>
            </View>
        </View>
    )
} 

export default NewReminder;