import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import DeathCard from "../../components/DeathCard";
import axios from "axios";

export default function DeathsScreen() {
  const [deathsState, setDeaths] = React.useState([]);

  React.useEffect(() => {
    async function fetchDeaths() {
      const data = await axios("https://breakingbadapi.com/api/deaths");
      setDeaths(data.data);
    }
    fetchDeaths();
  }, []);

  const tailwind = useTailwind();
  return (
    <View
      style={tailwind("h-full flex justify-center items-center bg-gray-700")}
    >
      <ScrollView
        style={tailwind("h-full w-full")}
      >
        {deathsState.length > 0 ? (
          deathsState.map((d) => {
            return (
              <DeathCard
                key={d.death_id}
                death={d.death}
                cause={d.cause}
                responsible={d.responsible}
                lastwords={d.last_words}
              />
            );
          })
        ) : (
          <ActivityIndicator
            style={tailwind("my-32")}
            size="large"
            color="white"
          />
        )}
      </ScrollView>
    </View>
  );
}
