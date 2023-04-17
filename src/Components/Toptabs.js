import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Grainers from "../Screens/Grainers/Grainers";
import Loser from "../Screens/Loser/Loser";
import New from "../Screens/New/New";
import Colors from "../Screens/Colors/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
const Tab = createMaterialTopTabNavigator();
export const Toptabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
          tabBarStyle: {
            marginTop: moderateVerticalScale(34),
            marginRight: moderateScale(95),
          },
          tabBarActiveTintColor: Colors.Dark_purple,
        }}
      >
        <Tab.Screen
          name="Grainers"
          component={Grainers}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Loser"
          component={Loser}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="New"
          component={New}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
      
     
      
  );
};
