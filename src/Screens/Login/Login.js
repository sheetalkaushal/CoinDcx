import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Styles } from "./LoginStyle";
import Custombtn from "../../Components/Custombtn";
import Registerbtn from "../../Components/Registerbtn";
import ImagePath from "../../constants/ImagePath";
import Btnsocial from "../../Components/Btnsocial";
import strings from "../../constants/strings";
import { AsyncSendData } from "../../utilis/utilis";
import { datasend } from "../../redux/actions/action";
export const Login = ({ navigation }) => {
  const [Email, SetEmail] = useState("");
  const [pass, SetPass] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [Showconfirmpass, SetShowConfirmPass] = useState(true);
  const [Hide, SetHide] = useState("Show");
  const [ConfirmHide, SetConfirmHide] = useState("Show");
  function gotologin() {
    if (!Email.trim()) {
      alert("enter Email");
    } else if (!pass.trim()) {
      alert("enter password");
    }
    else{
    AsyncSendData("Suggestions", { Email: Email, Password: password });
    datasend(true)
    }
  }
  function password() {
    if (enterpass == false) {
      SetEnterPass(true);
      SetHide("hide");
      return;
    }
    if (enterpass == true) {
      SetEnterPass(false);
      SetHide("Show");
      return;
    }
  }
  function Confirmpassword() {
    if (Showconfirmpass == false) {
      SetShowConfirmPass(true);
      SetConfirmHide("hide");
      return;
    }
    if (Showconfirmpass == true) {
      SetShowConfirmPass(false);
      SetConfirmHide("Show");
      return;
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
      <View style={Styles.createnew}>
        <Text style={Styles.account}>{strings.Login_account}</Text>
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
          onPress={password}
          placeholder={strings.Pass}
          SHOW={Hide}
          hide={enterpass}
          onChangeText={(val) => SetPass(val)}
          maxLength={8}
        />
      </View>
      <TouchableOpacity>
        <Text style={Styles.forgot}>{strings.Forgot}</Text>
      </TouchableOpacity>
      <Custombtn onPress={gotologin} title={strings.Continue} />
      <View>
        <Text style={Styles.or}>{strings.or} </Text>
      </View>
      <Btnsocial
        socialimg={ImagePath.icGoogle}
        title={strings.Google_account}
      />
    </View>
  );
};
