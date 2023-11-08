import React, {useState} from 'react';
import { BackHandler, Button, Pressable, Text, TextInput, View, ToastAndroid } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { handleBackPress } from './Main';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

export var reminders = [
]



const NewReminder = ({navigation}) => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const showToast = () => {
        ToastAndroid.show("Reminder added!")
    }

    function addReminder() {
        reminders.push({
                reminderTitle: title,
                reminderDate: date, 
                reminderDescription: description
        })    
        showToast()
    }



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    //ignore line 70, had to do that because mt-2 doesn't work for some reason

    const tw = useTailwind();
    return (
        <View style={tw('justify-center items-center flex')}>
            <Text style={tw('m-auto font-extrabold text-3xl p-5')}>New Reminder</Text>

            <View>
                <TextInput
                    placeholder='Title'
                    onChangeText={(textTitle) => {setTitle(textTitle)}}
                    style={tw('w=11/12 border-black border-2 p-2 rounded-xl')}
                />

                <View style={tw('m-auto p-2')}></View> 

                <TextInput
                    placeholder='Description'
                    onChangeText={(textDescription) => {setDescription(textDescription)}}
                    style={tw('w=11/12 border-black border-2 p-2 rounded-xl')}
                />

                <SafeAreaView>
                    <Button onPress={showDatepicker} title="Set Date" />

                    <View style={tw('m-auto p-2')}></View> 

                    <Button onPress={showTimepicker} title="Set Time" />

                    <View style={tw('m-auto p-2')}></View> 

                    <Text>Selected: {date.toLocaleString()}</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                </SafeAreaView>

                <View style={tw('m-auto p-5')}></View> 

                <Pressable onPress={()=>addReminder(title, description, date)}>
                    <Text style={tw('p-2 text-black border-2 rounded-xl')}>Add Reminder</Text>
                </Pressable>
            </View>
        </View>
    )
} 

export default NewReminder;