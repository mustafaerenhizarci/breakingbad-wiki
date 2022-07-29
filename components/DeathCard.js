import * as React from "react";

import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn";

export default function DeathCard({death,cause,responsible,lastwords}) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("bg-black px-5 py-4 my-5 w-5/6 rounded-lg mx-auto  ")}>
      <Text style={tailwind("font-bold text-xl text-red-600")}>
        Death:{" "}
        <Text style={tailwind("font-light text-base text-white")}>
          {death}
        </Text>
      </Text>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 0.2,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text style={tailwind("font-bold text-xl text-red-600")}>
        Cause:{" "}
        <Text style={tailwind("font-light text-base text-white")}>
          {cause}
        </Text>
      </Text>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 0.2,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text style={tailwind("font-bold text-xl text-red-600")}>
        Responsible:{" "}
        <Text style={tailwind("font-light text-base text-white")}>
          {responsible}
        </Text>
      </Text>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 0.2,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Text style={tailwind("font-bold text-xl text-red-600")}>
        Last Words:{" "}
        <Text style={tailwind("font-light text-base text-white")}>
          {lastwords}
        </Text>
      </Text>
    </View>
  );
}
