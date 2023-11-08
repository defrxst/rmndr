import React from "react";
import { useTailwind } from "tailwind-rn";

const Reminder = ({navigation, title, description, date}) => {
    const tw = useTailwind();

    return (
        <Text style={tw('text-black text-3xl m-auto')}>{title}</Text>
    )
}

export default Reminder;