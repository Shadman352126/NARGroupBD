import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import MyFooter from "./Components/MyFooter";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <MyFooter />
    </>
  );
}

export default App;
