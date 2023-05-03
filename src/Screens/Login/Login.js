import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Styles } from "./LoginStyle";
import 'expo-dev-client';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Custombtn from "../../Components/Custombtn";
import Registerbtn from "../../Components/Registerbtn";
import ImagePath from "../../constants/ImagePath";
import Btnsocial from "../../Components/Btnsocial";
import strings from "../../constants/strings";
import auth from '@react-native-firebase/auth';
import { AsyncSendData } from "../../utilis/utilis";
import { datasend, namedata } from "../../redux/actions/action";
export const Login = ({ navigation }) => {
//   console.log(GoogleSignin,"GoogleSigninGoogleSignin")
// GoogleSignin.configure({
//   webClientId: '797521806911-aopmfqsa1ras9279fcllpunp0q6uorvh.apps.googleusercontent.com',

// });
// console.log(webClientId,"hgdyucucf")
//  const onGoogleButtonPress =async()=> {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   // return auth().signInWithCredential(googleCredential);
//   const users_sign_in= auth().signInWithCredential(googleCredential);
//   users_sign_in.then((user)=>{
//   console.log(user)
// }).catch((error)=>{
//   console.log(error)
// })
// }
  const [Email, SetEmail] = useState("");
  const [pass, SetPass] = useState("");
  const [enterpass, SetEnterPass] = useState(true);
  const [Hide, SetHide] = useState(ImagePath.icView);
  const users = { fullName: Email };
  function gotologin() {
    if (!Email.trim()) {
      alert("enter Email");
    } else if (!pass.trim()) {
      alert("enter password");
    } else {
      namedata(users);
      AsyncSendData("Suggestions", { Email: Email, Password: password });
      datasend(true);
    }
  }
  function password() {
    if (enterpass == true) {
      SetEnterPass(false);
      SetHide(ImagePath.icHide);
    } else if (enterpass == false) {
      SetEnterPass(true);
      SetHide(ImagePath.icView);
    }
  }
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.arrowhelp}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={ImagePath.icBack}></Image>
        <Text style={Styles.help}>{strings.Help}</Text>
      </TouchableOpacity>
      <View style={Styles.createnew}>
        <Text style={Styles.account}>{strings.Login_account}</Text>
      </View>
      <View>
        <Registerbtn
          placeholder={"Email /FullName"}
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
      <View style={Styles.orborder}>
        <View style={Styles.orline}></View>
        <Text style={Styles.or}>{strings.or}</Text>
        <View style={Styles.orline1}></View>
      </View>
      <Btnsocial
        socialimg={ImagePath.icGoogle}
        title={strings.Google_account}
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
    </View>
  );
};
