import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { Style } from "./PortfolioStyle";
import ImagePath from "../../constants/ImagePath";
import Btnsocial from "../../Components/Btnsocial";
import Colors from "../Colors/Colors";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
const Portfolio = () => {
  return (
    <View style={Style.container}>
      <View style={Style.invest}>
        <Text style={Style.investments}>You don't have any investments!</Text>
        <View style={Style.Startinvesting}>
          <Text style={Style.popularcoins}>
            Start investing in these most popular coins
          </Text>
        </View>
      </View>
      <TouchableOpacity style={Style.bits}>
        <Image style={Style.bitimg} source={ImagePath.icbit} />
          <Text style={Style.bitcoin}>Bitcoin</Text>
          </TouchableOpacity>
         <TouchableOpacity style={Style.cointxt}>
          <Text style={Style.btctext}>BTC</Text>
            <Image  source={ImagePath.icnavigation}/> 
      </TouchableOpacity>
      <TouchableOpacity style={Style.Bitcoininvest}>
        <Image style={Style.percentimg} source={ImagePath.icpercent} />
        <Text style={Style.investment}>
          70% users perferred Bitcoin for their first investment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={Style.Ethereum}>
        <Image style={Style.bitimg} source={ImagePath.icEth} />
          <Text style={Style.bitcoin}>Ethererum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.cointxt}>
          <Text style={Style.btctext}>ETH</Text>
      <Image source={ImagePath.icnavigation}/> 
      </TouchableOpacity>

      <TouchableOpacity style={Style.Ripple}>
        <Image style={Style.bitimg} source={ImagePath.icripple}/>
          <Text style={Style.bitcoin}>Ripple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.cointxt}>
          <Text style={Style.btctext}>XRP</Text>
          <Image source={ImagePath.icnavigation}/> 
      </TouchableOpacity>
      <TouchableOpacity  style={Style.seeCoins}>
        <Btnsocial title="See all coins" textstyle={{fontSize:18, color:Colors.Dark_purple}} viewStyle={{borderRadius:5,borderColor:Colors.Dark_purple}}/>
      </TouchableOpacity>
    </View>
  );
};

export default Portfolio;
