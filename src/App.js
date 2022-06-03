import "./App.css";
import { Community, Banner, Menu, PopularReceipes } from "./Sections";
import React, { Component } from "react";
import { NavBar, Footer, ContactUs, Map, SectionIndicator } from "./Components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SectionIndicator />
      <Banner />
      <Community />
      <Map />
      <Menu />
      <PopularReceipes />

      {/*
      <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
