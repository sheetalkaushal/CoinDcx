import { View, Text, Image } from "react-native";
import React from "react";
import { Styles } from "./HeaderStyle";
import ImagePath from "../constants/ImagePath";
export default Header = () => {
  return (
    <View style={Styles.header}>
      <View style={Styles.Leftcontainer}>
        <Image style={Styles.profile} source={ImagePath.icProfile} />
        <Text>Hello Sheetal</Text>
      </View>
      <View style={Styles.Rightcontainer}>
        <Image style={Styles.notification} source={ImagePath.icnotification} />
      </View>
    </View>
  );
};
