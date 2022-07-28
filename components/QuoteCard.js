import * as React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
export default function QuoteCard({quote,author}) {
  const tailwind = useTailwind();
  return (
    <View>
      <View
        style={tailwind(
          "w-5/6 flex justify-center items-center bg-black border-2 border-gray-300 px-4 py-2 rounded-md mt-6 mb-4"
        )}
      >
        <Text style={tailwind("text-yellow-200 text-center font-bold text-lg")}>
          {quote}
        </Text>
        <Text
        style={tailwind("bg-gray-100 text-2xl text-center font-light px-5 py-2 my-4")}
      >
        {author}
      </Text>
      </View>
      
    </View>
  );
}
