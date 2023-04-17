import { View, Text } from "react-native";
import React from "react";
import { Bottomtab } from "./Bottomtab";
import { Toptabs } from "../Components/Toptabs";
export default function MainStack(Stack) {
  return (
    <>
     <Stack.Screen
        name={"Bottomtab"}
        component={Bottomtab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={"Toptabs"}
      component={Toptabs}
      options={{headerShown:false}}
      />
    </>
  );
}
