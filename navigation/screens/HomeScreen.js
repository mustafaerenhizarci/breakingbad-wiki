import * as React from "react";
import { View, Text, ImageBackground } from "react-native";


import { useTailwind } from "tailwind-rn";

export default function HomeScreen() {
  const tailwind = useTailwind();

  const BGimage = {
    uri: "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
  };

  return (
    <View style={tailwind("w-full h-full")}>
      <ImageBackground source={BGimage} resizeMode="cover" style={tailwind('h-full w-full flex justify-center items-center')}>
        <Text style={tailwind("text-xl text-black font-bold bg-white p-2 rounded-lg text-center")}>
          Home Screen
        </Text>
      </ImageBackground>
    </View>
  );
}
