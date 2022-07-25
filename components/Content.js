import { useTailwind } from "tailwind-rn";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-web";

const Content = () => {
  const image = {
    uri: "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
  };

  const tailwind = useTailwind();

  return (
    <View style={tailwind("h-5/6")}>
      <ImageBackground source={image} resizeMode="cover">
        <View style={tailwind("h-full flex items-center")}>
          <Text style={tailwind("text-xl font-bold text-center text-blue-400 bg-black rounded-xl my-2 p-3")}>Walter White & Jesse Pinkman</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Content;
