import { StyleSheet } from "react-native";
import Colors from "../Colors/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

export const Style = StyleSheet.create({
  Watch: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: "center",
  },
  glasimg: {
    marginTop: moderateScale(120),
    alignItems: "center",
  },
  shortlist: {
    alignItems: "center",
  },
  explore: {
    width: 350,
    marginTop: moderateScale(55),
  },
  favourite: {
    fontSize: 18,
    fontWeight: "500",
  },

  Tabicon: {
    fontSize: 14,
    textAlign: "center",
  },
});
