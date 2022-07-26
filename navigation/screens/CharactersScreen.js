import * as React from "react";
import { View, Text, TextInput, TouchableOpacity,ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

import { useTailwind } from "tailwind-rn";
import MainHeader from "../../components/MainHeader";
import CharacterCard from "../../components/CharacterCard";

const url = "https://www.breakingbadapi.com/api/characters";

export default function CharactersScreen({ navigation }) {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(()=>{



    async function fetchCharacters() {
        const res = await axios(url);
        setCharacters(res.data);
        
        
      }

    fetchCharacters()
    


      

  },[1]);

  

  
  

  const tailwind = useTailwind();
  return (
    <View
      style={tailwind("flex justify-start items-center h-full bg-gray-700 ")}
    >
      <MainHeader content={"Search Character"} />
      <View
        style={tailwind(
          "my-4 pt-2 pb-4 w-full h-16 flex justify-around items-center flex-row"
        )}
      >
        <TextInput
          style={tailwind(
            "text-black bg-white w-4/6 h-12 px-3 py-2 text-lg rounded-md"
          )}
          placeholder="Enter a name"
        />
        <TouchableOpacity
          style={tailwind(
            "rounded-md h-12 w-24  bg-blue-500 flex justify-center items-center"
          )}
        >
          <Text style={tailwind("text-white text-center font-bold text-sm")}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        style={tailwind("w-full pb-6 bg-gray-500")}
      >
        {(characters.length > 0) ? characters.map((char) => (
          <CharacterCard
            key={char.char_id}
            img={char.img}
            name={char.name}
            nickname={char.nickname}
            birthday={char.birthday}
            occupation={char.occupation}
            status={char.status}
            actor={char.portrayed}
          />
        )) : <ActivityIndicator style={tailwind('my-32')} size="large" color="white"/>}
      </ScrollView>
    </View>
  );
}
