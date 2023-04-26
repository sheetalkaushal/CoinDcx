import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Screens/Colors/Colors";
export const Style = StyleSheet.create({
  symbol: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: moderateScale(9),
  },
  uppertext: {
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.Black,
    marginLeft: 20,
  },
  countdown: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.Light_green,
  },

  uppertexts: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.Black,
  },
  lowertext: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.DARK_GREY,
  },

  bitcoins: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(12),
    alignItems: "center",
    marginBottom: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_light,
    paddingVertical: moderateVerticalScale(15),
  },
  counting: {
    marginLeft: 90,
  },
  toptext: {
    paddingHorizontal: 23,
  },
  countpercentage: {
    color: Colors.Red,
    fontSize: 18,
    fontWeight: "400",
  },
  allbitcoin: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 34,
    marginRight: 100,
    marginTop: 44,
    flex: 1,
    marginBottom: 20,
  },
  btnchange: {
    color: Colors.Dark_Green,
  },
});
