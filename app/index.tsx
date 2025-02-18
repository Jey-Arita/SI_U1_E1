import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "./styles/global-style";
import { useTemp } from "../hooks/useTemp"

const {number, setNumber, sumaNumber} = useTemp();

const handleNumber = () => {
  sumaNumber();
};

const App = () => {
  return (
    <View>
      <Text style={globalStyles.tittle}>Temperatura App</Text>
      <Text style={globalStyles.temp15a25}>{`${number}`}</Text>
      <View style={globalStyles.row}>
        <Pressable>
          <Text style={globalStyles.button} onPress={handleNumber}>
            -
          </Text>
        </Pressable>
        <Pressable>
          <Text style={globalStyles.button} onPress={() => console.log("+")}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;
