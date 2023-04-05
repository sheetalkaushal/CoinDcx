import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const Styles = StyleSheet.create({
  main: {
    backgroundColor: "#ffffff",
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
    color: "black",
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
    color: "#bdbdbd",
  },
  wait: {
    marginTop: moderateScale(23),
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  paste: {
    color: "#4963d1",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    height: moderateScale(30),
    width: moderateScale(45),
    textAlignVertical: "center",
  },
});
