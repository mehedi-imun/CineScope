import { HeroSection } from "./components/HeroSection/HeroSection";
import { MovieCard } from "./components/MovieCard/MovieCard";

const App = () => {
  return (
    <div>
      <HeroSection />
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2 w-[90%] mx-auto my-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default App;
