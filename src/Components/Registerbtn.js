import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image,
  } from "react-native";
  import {
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";
  import React from "react";
  export default ({
    placeholder,
    icon,
    keyboard,
    hide,
    onPress,
    SHOW,
    ...props
  }) => {
    return (
      <View style={Style.inputstyle}>
        <TextInput
          style={Style.settext}
          placeholder={placeholder}
          placeholderTextColor='#cacaca'
          keyboardType={keyboard}
          secureTextEntry={hide}
          {...props}
        ></TextInput>
        {SHOW ? (
          <TouchableOpacity onPress={onPress}>
            <Text style={Style.show}>{SHOW}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  const Style = StyleSheet.create({
    inputstyle: {
      padding: moderateScale(10),
      marginTop: moderateScale(28),
      backgroundColor:"white",
      borderRadius: moderateScale(5),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth:2,
      borderColor:"#f8f8f8",
    },
    show: {
      color:"#e1e1e1",
    },
    settext: {
      flex: 1,
      color:"#e1e1e1",
    },
  });
  