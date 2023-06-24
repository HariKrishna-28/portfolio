// import Skills from "../../sanity/schemas/skills";
import { Contact, NavBar } from "./components";
// import NavDots from "./components/NavDots/NavDots";
// import SocialMedia from "./components/Social/SocialMedia";
import {
  About,
  Contributions,
  // Footer,
  Header,
  Projects,
  // Skills,
} from "./container";

function App() {
  return (
    <div className=" bg-gradient-to-b from-gray-900 to-backgroundColor text-textColor">
      <div className="flex flex-col gap-5 overflow-hidden ">
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
