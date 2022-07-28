import * as React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { useTailwind } from "tailwind-rn";

export default function HomeScreen() {
  const tailwind = useTailwind();

  const BGimage = {
    uri: "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
  };

  return (
    <View style={tailwind("w-full h-full")}>
      <ImageBackground
        source={BGimage}
        resizeMode="cover"
        style={tailwind("h-full w-full flex justify-center items-center")}
      ></ImageBackground>
    </View>
  );
}
