import {
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { Styles } from "./TutorialStyles";
import ImagePath from "../../constants/ImagePath";
import Customtext from "../../Components/Customtext";
import strings from "../../constants/strings";
export const Tutorial = ({ navigation }) => {
  WIDTH = Dimensions.get("window").width;
  data = [
    { id: "1", userimg: ImagePath.icBanner1, },
    { id: "2", userimg: ImagePath.icBanner2 },
    { id: "3", userimg: ImagePath.icBanner3 },
  ];

  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <Image style={{ width: 150, height: 40 }} source={ImagePath.iclog} />
      </View>
      <FlatList 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      pagingEnabled
           data={data}
           keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
        <Image source={item.userimg}
          style={{ width:WIDTH, height: 550, resizeMode: "contain" }}
        />
      )}
        />

      <View style={Styles.downbtn}>
        <View>
          <Customtext
            onPress={() => navigation.navigate("Register")}
            title={strings.create_Account}
          />
        </View>
        <TouchableOpacity style={Styles.LoginAccount}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={Styles.Login}
          >
            {strings.Login}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
