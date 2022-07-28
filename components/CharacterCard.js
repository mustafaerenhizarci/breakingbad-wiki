import * as React from "react";
import { Text, View, Image, Dimensions } from "react-native";

import { useTailwind } from "tailwind-rn/dist";

export default function CharacterCard({img,charid,name,nickname,birthday,occupation,status,actor}) {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        "w-40 my-2 mx-1 bg-white rounded-lg flex justify-center items-center border-2 border-white rounded-t-md "
      )}
    >
      <Image
        resizeMode="stretch"
        source={{
          uri: img,
        }}
        style={tailwind("w-full h-48 rounded-t-md")}
      />

      <View style={tailwind("my-1 w-full  bg-black")}>
        <Text style={tailwind("text-center text-lg text-yellow-300 font-bold")}>
           {charid}
          {name}
        </Text>
      </View>
      <View
        style={tailwind(
          "w-full py-1 flex justify-center items-start bg-purple-900 rounded-b-md"
        )}
      >
        <Text
          style={tailwind("font-light text-white text-xs py-1 pl-1 w-full")}
        >
          <Text style={tailwind("font-bold text-zinc-300 text-xs")}>
            Nickname:
          </Text>{" "}
          "{nickname}"
        </Text>

        <Text
          style={tailwind("font-light text-white text-xs py-1 pl-1 w-full")}
        >
          <Text style={tailwind("font-bold text-zinc-300 text-xs")}>
            Birthday:
          </Text>{" "}
          "{birthday}"
        </Text>

        <Text
          style={tailwind("font-light text-white text-xs py-1 pl-1 w-full")}
        >
          <Text style={tailwind("font-bold text-zinc-300 text-xs")}>
            Occupation:
          </Text>{" "}
          {occupation.map(el => `"${el}", `)}
        </Text>

        <Text
          style={tailwind("font-light text-white text-xs py-1 pl-1 w-full")}
        >
          <Text style={tailwind("font-bold text-zinc-300 text-xs")}>
            Status:
          </Text>{" "}
          "{status}"
        </Text>

        <Text
          style={tailwind("font-light text-white text-xs py-1 pl-1 w-full")}
        >
          <Text style={tailwind("font-bold text-zinc-300 text-xs")}>
            Actor:
          </Text>{" "}
          "{actor}"
        </Text>
      </View>
    </View>
  );
}
