import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const Styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    paddingHorizontal: moderateScale(20),
    flex:1
  },
  account: {
    height: moderateVerticalScale(40),
    fontSize: moderateScale(24),
    color: "black",
    fontWeight: "500",
    marginTop: moderateScale(27),
  },
  arrow: {
    marginTop: moderateScale(56),
  },
  Services:{
  marginTop:moderateVerticalScale(16), 
  marginBottom:moderateVerticalScale(25) 
  },
  terms:{
    color:"#bdbdbd",
    fontSize:12,
  },

  or: {
    height: moderateVerticalScale(32),
    color: '#cacaca',
    fontSize: 16,
    marginVertical: moderateVerticalScale(23),
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
      
  },
});
