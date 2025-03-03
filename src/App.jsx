import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import InsideList from "./components/insideList/InsideList";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <InsideList />
      <Contact />
    </div>
  );
};

export default App;
