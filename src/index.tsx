import React from "react";
import ReactDOM from "react-dom/client";
//Cấu hình raact router dom
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import HomeTeamplate from "./templates/HomeTemplates";

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HistoryRouter history={history}>
    <Routes>
      <Route path="" element={<HomeTeamplate />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="rofile" element={<Profile />}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
);
