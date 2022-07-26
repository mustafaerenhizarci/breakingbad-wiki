import * as React from "react";
import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn";


export default function AboutScreen({navigation}) {
    const tailwind = useTailwind()
    return <View style={tailwind('flex justify-center items-center')}>
        <Text style={tailwind('text-xl text-center')}>About Screen</Text>
    </View>
}