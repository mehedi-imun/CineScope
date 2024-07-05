import { MovieCard } from "@/components/MovieCard/MovieCard";

export default function movies() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto my-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
