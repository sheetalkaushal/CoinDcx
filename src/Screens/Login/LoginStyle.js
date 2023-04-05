import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const Styles = StyleSheet.create({
    container: {
        backgroundColor:"#ffffff",
       flex:1,
        paddingHorizontal: moderateScale(20),
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
      Continues:{
        backgroundColor:"#a4b1e8",
        fontSize:23,
      },
      forgot:{
        color: "#4963d1",
        fontSize:14,
        marginVertical:moderateVerticalScale(23),
        fontWeight:"500",
      },
      or: {
        height: moderateVerticalScale(32),
        color: '#cacaca',
        fontSize: 16,
        marginVertical: moderateVerticalScale(23),
        letterSpacing: 0,
        lineHeight: 20,
        textAlign: "center",
      }
});
