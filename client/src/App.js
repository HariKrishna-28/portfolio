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
      <div className="flex flex-col gap-5 overflow-hidden select-none bg-backgroundColor text-textColor">
        <div className="fixed z-50 w-full">
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
