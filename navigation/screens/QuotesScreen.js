import * as React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import axios, { Axios } from "axios";
import { useTailwind } from "tailwind-rn";
import MainHeader from "../../components/MainHeader";
import QuoteCard from "../../components/QuoteCard";

export default function QuotesScreen({ quote, author }) {
  const [quotes, setQuotes] = React.useState([]);

  async function fetchQuotes() {
    const data = await axios("https://breakingbadapi.com/api/quotes");
    setQuotes(data.data[Math.floor(Math.random() * data.data.length)]);
  }

  React.useEffect(() => {
    fetchQuotes();
  }, [2]);

  const tailwind = useTailwind();
  return (
    <View
      style={tailwind("h-full flex justify-center items-center bg-gray-800")}
    >
      
      
      {quotes.length === 0 ? (
        <ActivityIndicator
          style={tailwind("my-32")}
          size="large"
          color="white"
        />
      ) : (
        <QuoteCard quote={quotes.quote} author={quotes.author} />
      )}
      <TouchableOpacity
        onPress={fetchQuotes}
        style={tailwind(
          "w-3/6 h-12 my-5 bg-blue-500 rounded-lg flex justify-center items-center"
        )}
      >
        <Text style={tailwind("text-white text-lg font-bold")}>RANDOM</Text>
      </TouchableOpacity>
    </View>
  );
}
