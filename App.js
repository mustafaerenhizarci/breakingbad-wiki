import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./tailwind.json";

import MainContainer from "./navigation/MainContainer";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MainContainer/>
    </TailwindProvider>
  );
}
