import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Styles = StyleSheet.create({
  main: {
    backgroundColor:Colors.White,
    paddingHorizontal: moderateScale(23),
    flex: 1,
  },
  arrow: {
    marginTop: moderateScale(56),
  },
  sms: {
    marginTop: moderateVerticalScale(23),
  },
  otpsms: {
    fontSize: 23,
    color:Colors.Black,
  },
  allotp: {
    flexDirection: "row",
    gap: 16,
    marginTop: moderateScale(32),
  },
  otp1: {
    flex: 0.2,
  },
  receive: {
    color:Colors.DARK_GREY,
  },
  wait: {
    marginTop: moderateScale(23),
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  paste: {
    color:Colors.Dark_purple,
    borderRadius: 9,
    borderWidth: 1,
    borderColor:Colors.DARK_GREY,
    height: moderateScale(30),
    width: moderateScale(45),
    textAlignVertical: "center",
  },
});
