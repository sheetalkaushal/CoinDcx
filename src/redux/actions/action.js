import { loginReducer } from "../reducers/Statemange";
import { store } from "../store";
const dispatch= store.dispatch
export const datasend = (data) => {
    dispatch(loginReducer(data));
  };