import "./App.css";
import { Community, Banner, Menu, PopularReceipes } from "./Sections";
import React, { useState } from "react";
import { NavBar, Footer, ContactUs, Map, SectionIndicator } from "./Components";

function App() {
  // const [isCurrentSection, setIsCurrentSection] = useState(false);
  // const sectionList = document.getElementsByClassName("section");
  // const windowHeight = window.innerHeight;
  // const navigation = document.getElementsByClassName("navigation");

  // const reset = () => {
  //   for (let i = 0; i < navigation.length; i++) {
  //     setIsCurrentSection(false);
  //     // navigation.children[i].classList.remove("selected");
  //   }
  // };
  // const check = () => {
  //   window.addEventListener("scroll", function () {
  //     const scrollTop = window.scrollY;

  //     for (let i = 0; i < sectionList.length; i++) {
  //       if (
  //         sectionList[i].offsetTop < scrollTop + windowHeight / 2 &&
  //         scrollTop < (sectionList[i].offsetTop * windowHeight) / 2
  //       ) {
  //         reset();
  //         setIsCurrentSection(isCurrentSection);
  //         console.log("passed");
  //         // navigation.children[i].classList.add("selected");
  //       }
  //     }
  //   });
  // };
  // check();
  // console.log("navigation", navigation);
  // console.log("sectionlist", sectionList);
  // console.log("windowHeight", windowHeight);

  return (
    <div className="App">
      <NavBar />
      <SectionIndicator
      // isCurrentSection={isCurrentSection}
      />
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
