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
    elevation: 5,
  },
  listingPrice:{
       paddingHorizontal:20,
  },
  price:{
    fontSize:22,
    color:Colors.Dark_purple,
    fontWeight:"400"
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
  grainers: {
    marginLeft: moderateScale(18),
    marginTop: moderateVerticalScale(40),
    color: Colors.Dark_purple,
    fontSize: 18,
    marginBottom: moderateVerticalScale(10),
  },
  grain: {
    borderBottomColor: Colors.grey_light,
    borderBottomWidth: 1,
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
    justifyContent:"space-between",
    paddingHorizontal: moderateScale(12),
    alignItems: "center",
    marginBottom: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_light,
    paddingVertical: moderateVerticalScale(15),
  },
  counting:{
    marginLeft:90
  },

});
