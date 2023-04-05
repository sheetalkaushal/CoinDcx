import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";
export const Styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(9),
    borderBottomWidth: moderateScale(1),
    paddingBottom: moderateVerticalScale(16),
    paddingTop: moderateVerticalScale(8),
  },
  Leftcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  menu: {
    height: moderateVerticalScale(27),
    width: moderateScale(27),
  },
  profile: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    borderRadius: 50,
  },
  notification: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
  },
});
