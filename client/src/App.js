// import Skills from "../../sanity/schemas/skills";
import { Contact, NavBar } from "./components";
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
      <div className="flex overflow-hidden bg-backgroundColor gap-5 text-textColor flex-col select-none">
        <div className="w-full fixed z-50">
          <NavBar />
        </div>
        <Header />
        <About />
        <Contributions />
        <Projects />
        <Contact />
        {/* <Footer />
        <Skills />
        <NavDots active={true} />
        <SocialMedia /> */}
      </div>
    </div>
  );
}

export default App;
