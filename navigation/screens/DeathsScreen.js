import * as React from "react";
import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn";


export default function DeathsScreen() {
    const tailwind = useTailwind()
    return <View style={tailwind('flex justify-center items-center')}>
        <Text style={tailwind('text-xl text-center')}>Deaths Screen</Text>
    </View>
}