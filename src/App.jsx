import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import SidebarMenu from "./SidebarMenu";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <p>hi</p>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
