import * as React from "react";
import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CharactersScreen from "./screens/CharactersScreen";
import DeathsScreen from "./screens/DeathsScreen";
import QuotesScreen from "./screens/QuotesScreen";
import AboutScreen from "./screens/About";

// Screen Names
const homeName = "Home";
const charactersName = "Characters";
const deathsName = "Deaths";
const quotesName = "Quotes";
const aboutName = "About";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const tailwind = useTailwind();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            switch (rn) {
              case homeName:
                iconName = focused ? "home" : "home-outline";
                break;

              case charactersName:
                iconName = focused ? "man" : "man-outline";
                break;

              case quotesName:
                iconName = focused
                  ? "chatbubble-ellipses"
                  : "chatbubble-ellipses-outline";
                break;

              case deathsName:
                iconName = focused ? "skull" : "skull-outline";
                break;

              case aboutName:
                iconName = focused ? "ellipsis-horizontal-circle" : "ellipsis-horizontal-circle-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "darkblue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: tailwind("py-3 h-16"),
          tabBarHideOnKeyboard:"true"
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={charactersName} component={CharactersScreen} />
        <Tab.Screen name={quotesName} component={QuotesScreen} />
        <Tab.Screen name={deathsName} component={DeathsScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
