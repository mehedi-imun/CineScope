import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";
import { MovieCard } from "../MovieCard/MovieCard";

const TopMovies = () => {
  const { data: movies, isLoading } = useGetMoviesQuery({});
  // console.log(movies);
  if (isLoading)
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );
  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto my-5">
        {movies?.data?.map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
