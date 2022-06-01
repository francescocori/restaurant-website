import "./App.css";
import { Community, Banner, Location, Menu, PopularReceipes } from "./Sections";

import { NavBar, Footer, ContactUs } from "./Components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Community />
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
