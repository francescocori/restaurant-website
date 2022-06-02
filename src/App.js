import "./App.css";
import { Community, Banner, Location, Menu, PopularReceipes } from "./Sections";
import React, { Component } from "react";
import { NavBar, Footer, ContactUs, Map } from "./Components";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Community />
      <Map />
      <Menu />

      {/* <Location />
      <Menu />
      <PopularReceipes />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
