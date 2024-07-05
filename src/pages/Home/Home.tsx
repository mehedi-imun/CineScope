import { HeroSection } from "@/components/HeroSection/HeroSection";
import TopMovies from "@/components/TopMovies/TopMovies";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <TopMovies />
    </div>
  );
}
