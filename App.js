import { View } from "react-native";
import { Provider, useSelector } from "react-redux";
import Routes from "./src/Navigations/Routes";
import { store } from "./src/redux/store";
import { Getdata } from "./src/redux/actions/apiaction";
import { datapi } from "./src/redux/actions/action";
import { useEffect } from "react";
import { COIN_POST } from "./src/config/urls";
export default function App() {
  useEffect(() => {
    Getdata(COIN_POST)
      .then((res) => {
        datapi(res.data);
        
      })
      .catch((er) => {});
  }, []);
  return (

    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </View>
  );
}
