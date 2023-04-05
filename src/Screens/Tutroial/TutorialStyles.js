import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";

export const Styles = StyleSheet.create({
  main: {
    backgroundColor: "#2a365c",
    flex:0.9,
  },

  header: {
    backgroundColor: "#2a365c",
    paddingTop: 70,
  },

  log: {
    marginTop: moderateVerticalScale(28),
    height: moderateVerticalScale(60),
    width: moderateScale(140),
  },

  downbtn: {
    backgroundColor: "white",
    padding: 20,
    gap: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex:0.5,
  },
  LoginAccount:{
    borderRadius: 2,
    height: moderateVerticalScale(48),
    alignItems: "center",
    marginTop:moderateScale(34),
    paddingVertical: moderateVerticalScale(14),
    borderRadius:8
  },
  Login:{
    fontSize: moderateVerticalScale(14),
    fontWeight: "bold",
    textAlign: "center",
    color: "#4963d1",
    textDecorationLine: 'underline',
  }

});
