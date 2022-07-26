import { View, Text } from "react-native";

import { useTailwind } from "tailwind-rn";

export default function MainHeader({ content }) {
  const tailwind = useTailwind();

  return <Text style={tailwind('font-bold text-center text-white text-2xl my-4 bg-gray-600 border-2 border-white rounded-xl py-2 px-3')}>{content}</Text>;
}
