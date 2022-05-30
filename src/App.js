import "./App.css";
import {
  Community,
  Landing,
  Location,
  Menu,
  PopularReceipes,
} from "./Sections";

import { NavBar, Footer, ContactUs } from "./Components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Community />
      <Location />
      <Menu />
      <PopularReceipes />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
