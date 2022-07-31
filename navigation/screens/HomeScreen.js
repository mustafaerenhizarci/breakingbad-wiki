import * as React from "react";
import { View, Text, ImageBackground, Image, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { useTailwind } from "tailwind-rn";

export default function HomeScreen() {
  const [loaded] = useFonts({
    Montserrat_Black: require("../../assets/fonts/Montserrat/Montserrat-Black.ttf"),
    Ubuntu_Regular: require("../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const tailwind = useTailwind();

  const BGimage = {
    uri: "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
  };

  return (
    <View style={tailwind("w-full h-full")}>
      <ImageBackground
        source={BGimage}
        resizeMode="cover"
        style={tailwind("h-full w-full flex justify-start items-center")}
      >
        <Text
          style={[
            tailwind("text-center text-amber-200 text-3xl my-3"),
            { fontFamily: "Montserrat_Black" },
          ]}
        >
          Breaking Bad Wiki
        </Text>
        <View
          style={tailwind("flex justify-center items-center w-3/4 h-36 my-3")}
        >
          <Image
            style={tailwind("w-full h-full")}
            source={require("../../assets/images/jesse.gif")}
            resizeMode="contain"
          />
        </View>

        <View style={tailwind('bg-white/10 px-3 py-2 rounded-md')}>
          <Text
            style={[
              tailwind("text-xl text-center text-gray-700"),
              { fontFamily: "Montserrat_Black" },
            ]}
          >
            Hello Breaking Bad Fans!
          </Text>
          <Text
            style={[
              tailwind("text-base text-left text-black my-2"),
              { fontFamily: "Ubuntu_Regular" },
            ]}
          >
            In this application, you can find a lot of information about
            Breaking Bad such as: 
          </Text>
          <Text style={[
              tailwind("text-base text-left text-black"),
              { fontFamily: "Ubuntu_Regular" },
            ]}>- All characters of the series</Text>
            <Text style={[
              tailwind("text-base text-left text-black"),
              { fontFamily: "Ubuntu_Regular" },
            ]}>- Beautiful quotes of special characters</Text>
            <Text style={[
              tailwind("text-base text-left text-black"),
              { fontFamily: "Ubuntu_Regular" },
            ]}>- Interesting Deaths in Breaking Bad</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
