import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";

export const Styles = StyleSheet.create({
  main: {
    backgroundColor:Colors.Light_White,
    flex:0.9,
  },

  header: {
    backgroundColor:Colors.Light_White,
    paddingTop: 70,
  },

  log: {
    marginTop: moderateVerticalScale(28),
    height: moderateVerticalScale(60),
    width: moderateScale(140),
  },

  downbtn: {
    backgroundColor:Colors.White,
    padding: 20,
    gap: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex:0.2,
  },
  LoginAccount:{
    borderRadius: 2,
    height: moderateVerticalScale(48),
    alignItems: "center",
    marginTop:moderateScale(22),
    paddingVertical: moderateVerticalScale(14),
    borderRadius:8
  },
  Login:{
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    textAlign: "center",
    color:Colors.Dark_purple,
    textDecorationLine: 'underline',
  }

});
