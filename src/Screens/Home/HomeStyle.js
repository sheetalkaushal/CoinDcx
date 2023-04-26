import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Style = StyleSheet.create({
  iconsorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: moderateScale(12),
    backgroundColor: Colors.White,
    paddingVertical: moderateScale(30),
    marginTop: moderateScale(34),
    marginHorizontal: moderateScale(10),
    alignItems: "center",
    alignSelf: "center",
    width: 350,
    height: 120,
    borderRadius: 8,
    elevation: 1,
  },
  listingPrice: {
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 22,
    color: Colors.Dark_purple,
    fontWeight: "400",
  },
  symbol: {
    width: 30,
    height: 30,
    borderRadius: 8,
    marginRight: moderateScale(9),
  },
  instant: {
    alignItems: "center",
  },
  Buy: {
    paddingTop: 12,
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
  Catogeries: {
    marginVertical: 23,
    width: 360,
    height: 50,
    marginLeft: 20,
    justifyContent: "center",
    backgroundColor: Colors.LIGHT_SKY,
    borderRadius: 7,
  },
  AllCatogeries: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.Dark_purple,
    fontWeight: "400",
  },
});
