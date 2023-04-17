import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import Colors from "../Colors/Colors";
export const Style=StyleSheet.create({
    cap:{
        paddingHorizontal:moderateScale(23),
        flex:1,
        backgroundColor:Colors.White
      },
    categery:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:moderateVerticalScale(30),
        gap:8,
    },
    largeCaps:{
        fontSize:20,
        fontWeight:"600"
    },
    tokens:{
       color:Colors.grey,
       fontSize:13,
       fontWeight:"400"
    },
    market:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
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
    
})