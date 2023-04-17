import {
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import ImagePath from "../../constants/ImagePath";
import { Style } from "./HomeStyle";
import { GetApi, Getdata, Postdata } from "../../redux/actions/apiaction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";         
import { Cards } from "../../Components/Cards";
import Colors from "../Colors/Colors";
import { Toptabs } from "../../Components/Toptabs";

WIDTH = Dimensions.get("window").width;
export const Home = () => {
  const value = useSelector((state) => state.status.nameupdate);
  const apivalue = useSelector((state) => state.status.apiupdate);
  data = [
    { id: "1", img: ImagePath.icHolders },
    { id: "2", img: ImagePath.icdelay },
  ];

  return (
    <View>
      <Header
        myText={value.fullName}
        Myimg={ImagePath.icProfile}
        notification={ImagePath.icnotification}
      />
      
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Image
                style={{ width: WIDTH, height: 100, marginTop: 23 }}
                source={item.img}
              />
            </View>
          )}
        />
        <TouchableOpacity style={Style.iconsorder}>
          <View style={Style.instant}>
            <Image source={ImagePath.icinstant} />
            <Text style={Style.Buy}>Instant Buy</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icbellicon} />
            <Text style={Style.Buy}>Alerts</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icsip} />
            <Text style={Style.Buy}>SIP</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icorder} />
            <Text style={Style.Buy}>Orders</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Toptabs/>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={apivalue}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={Style.bitcoins}>
              <View style={Style.uppertext}>
                <Image style={Style.symbol} source={{ uri: item.image }} />
                <Text style={Style.uppertexts}>
                  {item.name}
                  {"\n"}
                  <Text style={Style.lowertext}>{item.symbol}</Text>
                </Text>
              </View>
              <View style={Style.counting}>
                <Text style={Style.count}>{item.current_price}</Text>
                <Text style={Style.countdown}>
                  {item.price_change_percentage_24h}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={Style.listingPrice}>
          <Text style={Style.price}>Recently Listed</Text>
        </View>
        
        <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={{ marginBottom: 150}}>
          <Cards imgSourc={ImagePath.icDoyo} coinName={"DODO"} lowerName={"DODO"}  categoryname={"DeFi"} price={"₹73.45"} bgcolor={Colors.yellow}/>
          <Cards imgSourc={ImagePath.icspart} coinName={"Startegy"}lowerName={"STG"} categoryname={"Interoperability"} price={"₹16.75"} bgcolor={Colors.grey}/>
          <Cards imgSourc={ImagePath.icholo} coinName={"HOLO"}lowerName={"HOT"} categoryname={"Layer-1-Blockchain"} price={"₹0.45"} bgcolor={Colors.Darker}/>
          </ScrollView>
      </ScrollView>
    </View>
  );
};
