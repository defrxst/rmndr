import React, {useState} from 'react';
import { BackHandler, Pressable, Text, TextInput, View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { handleBackPress } from './Main';
import DatePicker from 'react-native-date-picker';


export const reminders = [

]



function addReminder() {
    reminders.push({
        title: title,
        description: description,
        date: date
    })    
}

const NewReminder = ({navigation}) => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    BackHandler.removeEventListener('hardwareBackPress', handleBackPress)


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

                <Pressable onPress={()=> setOpen(true)}>
                    <Text style={tw('text-black')}>Open date picker</Text>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                </Pressable>

                <Pressable onPress={()=>addReminder(title)}>
                    <Text style={tw('p-2 text-black border-2 rounded-xl')}>Add Reminder</Text>
                </Pressable>
            </View>
        </View>
    )
} 

export default NewReminder;