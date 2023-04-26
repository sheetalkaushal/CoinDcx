import { View, Text, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { Style } from "../Components/TopStyle";
import Colors from "../Screens/Colors/Colors";
import Customtext from "./Customtext";
import strings from "../constants/strings";
export const Toptabs = () => {
  const apivalue = useSelector((state) => state.status.apiupdate);
  const [index, Setindex] = useState(1);
  const Grainers = () => {
    return (
      <View style={Style.toptext}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
      </View>
    );
  };
  const Loser = () => {
    return (
      <View style={Style.toptext}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
                <Text style={Style.countpercentage}>
                  {item.ath_change_percentage}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  const New = () => {
    return (
      <View style={Style.toptext}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
                <Text style={Style.count}>{item.atl}</Text>
                <Text style={Style.countdown}>
                  {item.price_change_percentage_24h}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  return (
    <>
      <View style={Style.allbitcoin}>
        <TouchableOpacity
          style={{
            borderBottomColor: Colors.Dark_purple,
            borderBottomWidth: index == 1 ? 1 : 0,
          }}
          onPress={() => Setindex(1)}
        >
          <Text
            style={{
              color: index == 1 ? Colors.Dark_purple : Colors.DARK_GREY,
              fontSize: 17,
            }}
          >
            {strings.Grainers}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: Colors.Dark_purple,
            borderBottomWidth: index == 2 ? 1 : 0,
          }}
          onPress={() => Setindex(2)}
        >
          <Text
            style={{
              color: index == 2 ? Colors.Dark_purple : Colors.DARK_GREY,
              fontSize: 17,
            }}
          >
            {strings.Losers}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: Colors.Dark_purple,
            borderBottomWidth: index == 3 ? 1 : 0,
          }}
          onPress={() => Setindex(3)}
        >
          <Text
            style={{
              color: index == 3 ? Colors.Dark_purple : Colors.DARK_GREY,
              fontSize: 17,
            }}
          >
            {strings.New}
          </Text>
        </TouchableOpacity>
      </View>
      {index == 1 ? Grainers() : index == 2 ? Loser() : New()}
    </>
  );
};
