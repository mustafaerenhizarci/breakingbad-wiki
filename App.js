import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./tailwind.json";

import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <View>
        <Header />
        <Content/>
      </View>
    </TailwindProvider>
  );
}
