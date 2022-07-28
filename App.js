import { Text, View, ImageBackground } from "react-native";
import * as React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import {useNetInfo} from "@react-native-community/netinfo";
import MainContainer from "./navigation/MainContainer";
import NoInternet from "./components/NoInternet";





export default function App() {
  const isConnected = useNetInfo().isInternetReachable

  return (
    <TailwindProvider utilities={utilities}>
      {isConnected ? <MainContainer /> : <NoInternet />}
    </TailwindProvider>
  );
}
