import * as React from 'react'
import { Text,View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

export default function NoInternet() {
    const tailwind = useTailwind()

    return <View style={tailwind('bg-black w-full h-full flex justify-center items-center rounded-md px-3 py-2')}>
        <Text style={tailwind('font-bold text-2xl text-yellow-300')}>No Internet Connection</Text>
    </View>
}