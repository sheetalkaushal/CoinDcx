import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import ImagePath from "../../constants/ImagePath";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../Colors/Colors";
import Watchlist from "../Watchlist/Watchlist";
import Catogeries from "../Catogeries/Catogeries";
import All from "../All/All";
import { Styles } from "./MarketsStyle";
const Tab = createMaterialTopTabNavigator();
const Marketing = () => {
  return (
    <>
      <View>
        <Header
          myText={"Markets"}
          notification={ImagePath.icSreach}
          txtstyle={Styles.market}
          headerStyle={Styles.headerMarket}
          notify={Styles.notificated}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "700",
          },
          tabBarActiveTintColor: Colors.Dark_purple,
        }}
      >
        <Tab.Screen
          name="Watchlist"
          component={Watchlist}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Catogeries"
          component={Catogeries}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="All"
          component={All}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default Marketing;
