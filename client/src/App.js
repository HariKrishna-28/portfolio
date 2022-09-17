// import Skills from "../../sanity/schemas/skills";
import { NavBar } from "./components";
import NavDots from "./components/NavDots/NavDots";
import SocialMedia from "./components/Social/SocialMedia";
import {
  About,
  Contributions,
  Footer,
  Header,
  Projects,
  Skills,
} from "./container";

function App() {
  return (
    <div>
      <div className="flex flex-col select-none">
        <NavBar />
        <Header />
        <About />
        <Contributions />
        <Footer />
        <Skills />
        <Projects />
        {/* <NavDots active={true} />
        <SocialMedia /> */}
      </div>
    </div>
  );
}

export default App;
