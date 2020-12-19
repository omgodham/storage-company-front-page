import Navbar from "./Navbar";
import Home from "./Home"
import "./styles.css"
import About from "./About.jsx";
import Design from "./Design";
import Team from "./Team.jsx";
import Numbers from "./Numbers.jsx";
import Work from "./Work";
import Skills from "./Skills";
import Price from "./Price.jsx";
import Contact from "./Contact";
function App() {
  return <div>
  <Navbar />
      <Home />
      <About />
      <Design />
      <Team />
      <Numbers />
      <Work />
      <Skills />
      <Price />
      <Contact />
      </div>;
}

export default App;
