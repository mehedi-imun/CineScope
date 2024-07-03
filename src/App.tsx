import { HeroSection } from "./components/HeroSection/HeroSection";
import TopMovies from "./components/TopMovies/TopMovies";
import Navbar from "./pages/shared/Navbar";

const App = () => {
  return (
    <div className="mx-auto container">
      <Navbar />
      <HeroSection />
      <TopMovies />
    </div>
  );
};

export default App;
