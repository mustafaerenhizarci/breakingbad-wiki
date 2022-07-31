import * as React from "react";
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTailwind } from "tailwind-rn";
import { useFonts } from "expo-font";

import { Button } from "react-native";

export default function AboutScreen({ navigation }) {
  async function directAPI() {
    await Linking.openURL("https://breakingbadapi.com/");
  }
  async function directCoffee() {
    await Linking.openURL("https://www.buymeacoffee.com/hizarcimustafa");
  }
  async function directGithub() {
    await Linking.openURL("https://github.com/mustafaerenhizarci");
  }

  const [loaded] = useFonts({
    Montserrat_Black: require("../../assets/fonts/Montserrat/Montserrat-Black.ttf"),
    Montserrat_Light: require("../../assets/fonts/Montserrat/Montserrat-Light.ttf"),
    Ubuntu_Light: require("../../assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    Ubuntu_Bold: require("../../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const tailwind = useTailwind();
  return (
    <ScrollView style={tailwind("h-full w-full bg-gray-900")}>
      <View style={tailwind("w-full my-4")}>
        <Image
          style={tailwind("w-36 h-36 mx-auto")}
          resizeMode="cover"
          source={require("../../assets/images/walter-white.png")}
        />
        <View style={tailwind("flex flex-row justify-center items-center")}>
          <Ionicons
            name="arrow-down-outline"
            style={tailwind(
              "text-4xl text-white text-center text-blue-200 mt-6"
            )}
          />
          <Ionicons
            name="arrow-down-outline"
            style={tailwind(
              "text-4xl text-white text-center text-blue-400 mt-6"
            )}
          />
          <Ionicons
            name="arrow-down-outline"
            style={tailwind(
              "text-4xl text-white text-center text-blue-200 mt-6"
            )}
          />
        </View>
        <Text
          style={[
            tailwind("text-2xl text-white text-yellow-600 text-center my-2"),
            { fontFamily: "Montserrat_Black" },
          ]}
        >
          Hello Breaking Bad Fan!
        </Text>
      </View>
      <View style={tailwind("w-full px-4 my-4")}>
        <Text
          style={[
            tailwind("text-left text-white text-sm my-1"),
            { fontFamily: "Ubuntu_Light" },
          ]}
        >
          Hi guys! I am a Junior Full Stack Developer and Student from Turkey
          and I am doing this application because I love Breaking Bad and Of
          Course while I do that my aim is sharping my skills and knowledge of
          software.
        </Text>
        <Text
          style={[
            tailwind("text-left text-white text-sm my-2"),
            { fontFamily: "Ubuntu_Light" },
          ]}
        >
          And I want to tell about that this app takes all of the informations
          about breaking bad from Breaking Bad API service and they are great!
          You can reach them from here :
        </Text>
        <Button title="Breaking Bad API" onPress={directAPI}></Button>
        <Text
          style={[
            tailwind("text-left text-white text-sm my-3"),
            { fontFamily: "Ubuntu_Light" },
          ]}
        >
          If you like my little project , you can tell about my app to your
          friends and even you can encourage me with some extra support in this
          journey.
        </Text>

        <TouchableOpacity
          onPress={directCoffee}
          style={tailwind(
            "w-full h-12 bg-yellow-300 flex flex-row justify-center items-center rounded-md"
          )}
        >
          <Ionicons name="cafe-outline" style={tailwind("text-4xl")} />
          <Text
            style={[
              tailwind("text-center text-xl"),
              { fontFamily: "Ubuntu_Bold" },
            ]}
          >
            {" "}
            Buy me a Coffee!
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            tailwind("text-left text-white text-sm my-3"),
            { fontFamily: "Ubuntu_Light" },
          ]}
        >
          Also you can follow my projects from github:
        </Text>
        <TouchableOpacity
          onPress={directGithub}
          style={tailwind(
            "w-full h-12 bg-white flex flex-row justify-center items-center rounded-md"
          )}
        >
          <Ionicons name="logo-github" style={tailwind("text-4xl")} />
          <Text
            style={[
              tailwind("text-center text-xl"),
              { fontFamily: "Ubuntu_Bold" },
            ]}
          >
            {" "}
            Check My Projects!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
