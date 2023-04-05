import {
    View,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import {
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";

  export default ({ title, socialimg }) => {
    return (
      <TouchableOpacity style={ Styles.btnsocial}>
        <Image source={socialimg}></Image>
        <Text style={ Styles.textsocial}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const Styles = StyleSheet.create({
    btnsocial: {
      backgroundColor:"white",
      borderRadius: 8,
      height: moderateVerticalScale(48),
      alignItems: "center",
      paddingHorizontal: moderateVerticalScale(16),
      marginBottom: moderateScale(16),
      flexDirection: "row",
      borderWidth:1,
      
    },
    textsocial: {
      fontSize: moderateVerticalScale(14),
      fontWeight: "bold",
      letterSpacing: moderateScale(0.88),
      textAlign: "center",
      color: "black",
      flex: 1,
    },
    socialimg: {
      alignSelf: "center",
      marginLeft: moderateScale(16),
    },
  });
  