import { useGetMoviesQuery } from "@/redux/api/api";
import { MovieCard } from "../MovieCard/MovieCard";
import { TMovie } from "@/types";

const TopMovies = () => {
  const { data, isLoading } = useGetMoviesQuery({});
  // console.log(data);
  if (isLoading) {
    return (
      <p className="text-4xl text-yellow-500 flex justify-center items-center">
        Loading...
      </p>
    );
  }
  const { data: movies } = data;
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {movies.slice(0, 4).map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
