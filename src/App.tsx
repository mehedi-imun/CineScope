import { HeroSection } from "./components/HeroSection/HeroSection";
import Navbar from "./pages/shared/Navbar";

const App = () => {
  return (
    <div className="mx-auto container">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
