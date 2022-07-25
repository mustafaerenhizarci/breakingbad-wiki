import { useTailwind } from "tailwind-rn";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-web";

const Header = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("bg-black h-1/6 p-0 m-0 flex justify-center items-center")}>
      <Text style={tailwind("text-center text-white font-light text-2xl")}>
        Breaking Bad Wikipedia
      </Text>
    </View>
  );
};

export default Header;
