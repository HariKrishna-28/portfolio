// import Skills from "../../sanity/schemas/skills";
import { NavBar } from "./components";
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
      <div className="flex flex-col gap-5">
        <NavBar />
        <Header />
        <About />
        <Footer />
        <Skills />
        <Contributions />
        <Projects />
      </div>
    </div>
  );
}

export default App;
