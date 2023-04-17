import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: Colors.Black,
    fontWeight: "500",
    marginTop: moderateScale(27),
  },
  arrowhelp: {
    flexDirection: "row",
    marginTop: moderateScale(56),
    justifyContent: "space-between",
    alignItems: "center",
  },
  help: {
    color: Colors.Dark_purple,
    fontSize: 20,
  },
  Continues: {
    backgroundColor: Colors.Purple,
    fontSize: 23,
  },
  forgot: {
    color: Colors.Dark_purple,
    fontSize: 14,
    marginVertical: moderateVerticalScale(23),
    fontWeight: "500",
  },
  or: {
    height: moderateVerticalScale(32),
    color: Colors.Normal_white,
    fontSize: 16,
    marginVertical: moderateVerticalScale(23),
    padding: 4,
  },
  orborder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orline: {
    height: 1,
    width: 100,
    marginLeft: moderateScale(44),
    backgroundColor: Colors.grey_light,
  },
  orline1: {
    height: 1,
    width: 100,
    marginRight: moderateScale(44),
    backgroundColor: Colors.grey_light,
  },
});
