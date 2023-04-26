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
import strings from "../../constants/strings";
import { Toptabs } from "../../Components/Toptabs";
WIDTH = Dimensions.get("window").width;
export const Home = ({ navigation }) => {
  const [states, Setstates] = useState(true);
  const value = useSelector((state) => state.status.nameupdate);
  data = [
    { id: "1", img: ImagePath.icHolders },
    { id: "2", img: ImagePath.icdelay },
  ];
  const onClick  =() =>{
    if(states == true){

      Setstates(false)
      return
  }
     if(states == false){
  
      Setstates(true)
      return
    }

  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.White }}>
      <Header
        myText={value.fullName}
        Myimg={ImagePath.icProfile}
        notification={ImagePath.icnotification}
      />
      <ScrollView>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
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
            <Text style={Style.Buy}>{strings.Instant_Buy}</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icbellicon} />
            <Text style={Style.Buy}>{strings.Alerts}</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icsip} />
            <Text style={Style.Buy}>{strings.SIP}</Text>
          </View>
          <View style={Style.instant}>
            <Image source={ImagePath.icorder} />
            <Text style={Style.Buy}>{strings.Orders}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Toptabs />
        </View>
        <TouchableOpacity style={Style.Catogeries}>
          <Text
            onPress={() => navigation.navigate("Catogeries")}
            style={Style.AllCatogeries}
          >
            {strings.All_Catogeries}
          </Text>
        </TouchableOpacity>
        <View style={Style.listingPrice}>
          <Text style={Style.price}>{strings.Recently_Listed}</Text>
        </View>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 9 }}
        >
          <Cards
            imgSourc={ImagePath.icDoyo}
            coinName={strings.dodo}
            lowerName={strings.dodo}
            categoryname={strings.Defi}
            price={strings.price1}
            bgcolor={Colors.yellow}
          />
          <Cards
            imgSourc={ImagePath.icspart}
            coinName={strings.Startregy}
            lowerName={strings.STG}
            categoryname={strings.Interoperability}
            price={strings.price2}
            bgcolor={Colors.grey}
          />
          <Cards
            imgSourc={ImagePath.icholo}
            coinName={strings.HOLO}
            lowerName={strings.HOT}
            categoryname={strings.Layer_lockchain}
            price={strings.price3}
            bgcolor={Colors.Darker}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};
