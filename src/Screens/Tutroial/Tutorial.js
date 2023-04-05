import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { Styles } from "./TutorialStyles";
import ImagePath from "../../constants/ImagePath";
import Customtext from "../../Components/Customtext";
import strings from "../../constants/strings";
export const Tutorial = ({navigation}) => {
  WIDTH = Dimensions.get("window").width;
  return (
    <View style={Styles.main}>
      <View style={Styles.header}>
        <Image style={{ width: 150, height: 40 }} source={ImagePath.iclog} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <Image
          style={{ width: WIDTH, height: 550, resizeMode: "contain" }}
          source={ImagePath.icBanner1}
        />
        <Image
          style={{ width: WIDTH, height: 550, resizeMode: "contain" }}
          source={ImagePath.icBanner1}
        />
        <Image
          style={{ width: WIDTH, height: 550, resizeMode: "contain" }}
          source={ImagePath.icBanner3}
        />
      </ScrollView>

      <View style={Styles.downbtn}>
        <View>
          <Customtext  onPress={()=>navigation.navigate("Register")} title={strings.create_Account} />
        </View>
        <TouchableOpacity style={Styles.LoginAccount}>
          <Text onPress={()=>navigation.navigate("Login")}  style={Styles.Login}>{strings.Login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
