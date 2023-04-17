import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Styles } from "./RegisterStyle";
import Registerbtn from "../../Components/Registerbtn";
import Custombtn from "../../Components/Custombtn";
import ImagePath from "../../constants/ImagePath";
import Btnsocial from "../../Components/Btnsocial";
import strings from "../../constants/strings";
import { namedata } from "../../redux/actions/action";
import Colors from "../Colors/Colors";
export const Register = ({ navigation }) => {
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [Hide, SetHide] = useState(ImagePath.icView);

  function gotosetpass() {
    if (!FullName.trim()) {
      alert("Enter your first name");
    } else if (!Email.trim()) {
      alert("Enter your Email");
    } else if (!password.trim()) {
      alert("enter password");
    } 
    else{

    navigation.navigate("OTP")
    }
  }
  function Hidepassword() {
    if (enterpass == true) {
      SetEnterPass(false);
      SetHide (ImagePath.icHide)
    }
     else if (enterpass == false) {
      SetEnterPass(true);
      SetHide(ImagePath.icView);

    }
  }
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image style={Styles.arrow} source={ImagePath.icBack}></Image>
      </TouchableOpacity>
      <View>
        <Text style={Styles.account}>{strings.create_Account}</Text>
      </View>
      <View style={Styles.firstn}>
        <View style={Styles.fname}>
          <Registerbtn
            placeholder={strings.fullName}
            value={FullName}
            onChangeText={(val) => SetFullName(val)}
            maxLength={15}
          />
        </View>
      </View>
      <View>
        <Registerbtn
          placeholder={strings.Email}
          value={Email}
          onChangeText={(val) => SetEmail(val)}
        />
      </View>
      <View>
        <Registerbtn
          onPress={Hidepassword}
          placeholder={strings.Create_pass}
          SHOW={Hide}
          hide={enterpass}
          onChangeText={(val) => SetPassword(val)}
          maxLength={8}
        />
      </View>
      <View style={Styles.Services}>
        <Text style={Styles.terms}>
     {strings.Agree}
        </Text>
        <Text style={Styles.termservice}>{strings.Services}</Text>
        <Text style={Styles.terms}>{strings.and}</Text>
        <Text style={Styles.policy}>{strings.Policy}</Text>
      </View>
      <Custombtn  onPress={gotosetpass}title={strings.Continue} />
      <View style={Styles.orborder}>
        <View style={Styles.orline}></View>
        <Text style={Styles.or}>{strings.or}</Text>
        <View style={Styles.orline1}></View>
      </View>
      <Btnsocial
        socialimg={ImagePath.icGoogle}
        title={strings.Google_account}
      />
    </View>
  );
};
