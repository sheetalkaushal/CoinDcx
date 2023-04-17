import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Styles = StyleSheet.create({
  container: {
    backgroundColor:Colors.White,
    paddingHorizontal: moderateScale(20),
    flex: 1,
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color:Colors.Black,
    fontWeight: "500",
    marginTop: moderateScale(27),
  },
  arrow: {
    marginTop: moderateScale(56),
  },
  Services: {
    marginTop: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(25),
    flexDirection:"row",
    justifyContent:"center"
  },
  terms: {
    color:Colors.DARK_GREY,
    fontSize: 12,
  },
  termservice:{
    color:Colors.DARK_GREY,
    fontSize: 12,
    borderBottomColor:Colors.DARK_GREY,
    borderBottomWidth:1,
    marginBottom:moderateScale(3)
  },
  policy:{
    color:Colors.DARK_GREY,
    fontSize: 12,
    borderBottomColor:Colors.DARK_GREY,
    borderBottomWidth:1,
    marginBottom:moderateScale(3)
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
    width:100,
    marginLeft:moderateScale(44),
    backgroundColor: Colors.grey_light,
  },
  orline1: {
    height: 1,
    width:100,
    marginRight:moderateScale(44),
    backgroundColor: Colors.grey_light,
  },
});
