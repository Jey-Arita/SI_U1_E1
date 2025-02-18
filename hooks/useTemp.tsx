import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export const useTemp = () => {
  const [number, setNumber] = useState('0');

  const sumaNumber = () => {
    const numero = parseInt(number) + 1
    console.log(numero);
  };
  return{
    number, setNumber, sumaNumber
  }
};

