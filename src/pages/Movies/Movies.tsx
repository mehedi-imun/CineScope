import { MovieCard } from "@/components/MovieCard/MovieCard";
import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";

export default function Movies() {
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
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
