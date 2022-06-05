import React from "react";
import "./App.css";
import { Community, Banner, Menu, PopularReceipes } from "./Sections";
import { NavBar, Footer, ContactUs, Map } from "./Components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Community />
      <Map />
      <Menu />
      <PopularReceipes />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
