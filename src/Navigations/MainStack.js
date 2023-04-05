import { View, Text } from "react-native";
import React from "react";
import { Bottomtab } from "./Bottomtab";
export default function MainStack(Stack) {
  return (
    <>
     <Stack.Screen
        name={"Bottomtab"}
        component={Bottomtab}
        options={{ headerShown: false }}
      />
    </>
  );
}
