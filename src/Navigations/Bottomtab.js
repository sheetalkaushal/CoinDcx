import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import strings from "../constants/strings";
import ImagePath from "../constants/ImagePath";
import { Home } from "../Screens/Home/Home";
import Marketing from "../Screens/Marketing/Marketing";
import Portfolio from "../Screens/Portfolio/Portfolio";
import Earns from "../Screens/Earns/Earns";
const Tab = createBottomTabNavigator();
export const Bottomtab = () => {
  return (
    <Tab.Navigator
      initRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#4963d1",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4963d1" : "grey",
                }}
                source={ImagePath.ichome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Marketing"
        component={Marketing}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4963d1" : "grey",
                }}
                source={ImagePath.icIncrease}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Earns"
        component={Earns}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4963d1" : "grey",
                }}
                source={ImagePath.icEaring}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#4963d1" : "grey",
                }}
                source={ImagePath.icInvestment}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
