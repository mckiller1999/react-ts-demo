import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

const HomeTeamplate = (props: Props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section style={{ minHeight: 550 }}>
        <Outlet></Outlet>
      </section>
      <footer className="bg-dark text-white text-center p-3">Footer</footer>
    </>
  );
};

export default HomeTeamplate;
