import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { UserSigninForm } from "../../pages/Login";
import axios from "axios";
import {
  ACCESSTOKEN,
  USER_LOGIN,
  getStoreJson,
  saveStorage,
  saveStoreJson,
} from "../../utils/config";
export interface UserLogin {
  email: string;
  accessToken: string;
}
export interface UserReducerState {
  userLogin: UserLogin | null;
}

const initialState: UserReducerState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (
      state: UserReducerState,
      action: PayloadAction<UserLogin>
    ) => {
      state.userLogin = action.payload;
      //console.log(state.userLogin);
    },
  },
});

export const { loginAction } = userReducer.actions;

export default userReducer.reducer;

//-------------------async action-------------

export const siginActionApi = (userLoginForm: UserSigninForm) => {
  return async (dispatch: AppDispatch) => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: userLoginForm,
    });
    const action: PayloadAction<UserLogin> = loginAction(res.data.content);
    dispatch(action);
    //lưu localeStore
    saveStoreJson(USER_LOGIN, res.data.content);
    //đối với việc lưu primary value vào store thì không dùng JSON.stringtify vì sẽ sinh thêm dấu '' và làm sai dữ liệu
    //'accessToken'=>''accessToken''
    saveStorage(ACCESSTOKEN, res.data.content.accessToken);
  };
};
