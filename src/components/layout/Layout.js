import React from "react";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
//Heder'ın css'i gelmiyor

export default Layout;
