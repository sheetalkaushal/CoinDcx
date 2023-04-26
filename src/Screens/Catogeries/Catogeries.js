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
import strings from "../../constants/strings";
const Catogeries = () => {
  const apivalue = useSelector((state) => state.status.apiupdate);
  return (
    <ScrollView>
      <View style={Style.cap}>
        <TouchableOpacity style={Style.categery}>
          <Image style={{ borderRadius: 18 }} source={ImagePath.iclargecap} />
          <Text style={Style.largeCaps}>{strings.Large_Caps}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.market}>
          <Text style={Style.tokens}>{strings.Top_tokens}</Text>
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
          <Text style={Style.largeCaps}>{strings.Most_Traded}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.market}>
          <Text style={Style.tokens}>{strings.Top_volume} </Text>
          <Image source={ImagePath.icnavigation} />
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
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
