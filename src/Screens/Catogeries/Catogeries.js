import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from "react-native";
import React from "react";
import { Style } from "./CatogeriesStyle";
import ImagePath from "../../constants/ImagePath";
import { useSelector } from "react-redux";
const Catogeries = () => {
  const apivalue = useSelector((state) => state.status.apiupdate);
  return (
    <ScrollView>
      <View style={Style.cap}>
        <TouchableOpacity style={Style.categery}>
          <Image style={{ borderRadius: 18 }} source={ImagePath.iclargecap} />
          <Text style={Style.largeCaps}>Large Caps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.market}>
          <Text style={Style.tokens}>Top tokens by market Capitalisation</Text>
          <Image source={ImagePath.icnavigation} />
        </TouchableOpacity>
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
        <TouchableOpacity style={Style.categery}>
          <Image style={{ borderRadius: 18 }} source={ImagePath.icmostTrade} />
          <Text style={Style.largeCaps}>Most Traded</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.market}>
          <Text style={Style.tokens}>
            Top tokens by volume in the past of 24 hours
          </Text>
          <Image source={ImagePath.icnavigation} />
        </TouchableOpacity>
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
      </View>
    </ScrollView>
  );
};

export default Catogeries;
