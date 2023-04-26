import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import React, { useState } from "react";
import Colors from "../Screens/Colors/Colors";
export default ({
  placeholder,
  icon,
  keyboard,
  hide,
  onPress,
  SHOW,
  ...props

}) => {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  // const onclick = () => {
  //   if (isTextInputFocused == true) {
  //     setTextInputFocused(false);
  //   } else if (isTextInputFocused == false) setTextInputFocused(true);
  // };
  return (
    <View
      style={{
        ...Style.inputstyle,
        borderColor:
          isTextInputFocused == true ? Colors.Dark_purple : Colors.DARK_GREY,
      }}
      onFocus={() => setTextInputFocused(true)}
    >
      <TextInput
        style={Style.settext}
        placeholder={placeholder}
        placeholderTextColor={Colors.Normal_white}
        keyboardType={keyboard}
        secureTextEntry={hide}
        {...props}
        prop
      ></TextInput>
      {SHOW ? (
        <TouchableOpacity onPress={onPress}>
          <Image style={Style.show} source={SHOW} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
const Style = StyleSheet.create({
  inputstyle: {
    padding: moderateScale(10),
    marginTop: moderateScale(28),
    backgroundColor: "white",
    borderRadius: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.grey_light,
  },
  settext: {
    flex: 1,
    color: Colors.Black,
  },
});
