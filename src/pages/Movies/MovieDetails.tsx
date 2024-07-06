// import { FaPlay, FaPlus, FaRegStar, FaStar } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useGetSingleMovieQuery } from "@/redux/api/api";
import { Play, Plus, Star, StarIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id: slug } = useParams();
  // console.log(slug);
  const { data, isLoading } = useGetSingleMovieQuery(slug);
  // console.log(data);

  if (isLoading)
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );

  const { data: movie } = data;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        i <= rating ? (
          <Star key={i} className="text-yellow-500" />
        ) : (
          <StarIcon key={i} className="text-gray-500" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl w-full bg-gray-800 rounded-lg shadow-lg p-6 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-extrabold mb-4">{movie?.title}</h1>
        <div className="flex flex-col md:flex-row">
          <img
            src={movie?.image}
            alt="Movie Poster"
            className="w-full md:w-1/3 h-auto mb-4 rounded-lg shadow-lg md:mr-6 transform hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col justify-between">
            <div className="text-gray-400 mb-4">
              <p className="mb-2">
                <span className="font-semibold text-yellow-500">
                  Release Date:
                </span>{" "}
                January 1, 2023
              </p>
              <div className="mb-2 flex items-center">
                <span className="font-semibold text-yellow-500">Rating:</span>
                <div className="ml-2 flex">{renderStars(8.5)}</div>
              </div>
              <p className="mb-2">
                <span className="font-semibold text-yellow-500">Genre:</span>{" "}
                {movie?.genre}
              </p>
              <p className="mb-2">
                <span className="font-semibold text-yellow-500">Director:</span>{" "}
                {movie?.director}
              </p>
              <p className="mb-4">
                <span className="font-semibold text-yellow-500">Cast:</span>{" "}
                {movie?.cast}
              </p>
            </div>
            <p className="text-justify mb-4">{movie?.description}</p>
            <div className="flex space-x-4 mb-4">
              <Button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-bold flex items-center hover:bg-yellow-400">
                <Play className="mr-2" /> Watch Trailer
              </Button>
              <Button className="px-4 py-2 bg-gray-700 text-gray-200 rounded-lg font-bold flex items-center hover:bg-gray-600">
                <Plus className="mr-2" /> Add to Watchlist
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          <div className="bg-gray-700 p-4 rounded-lg mb-4 animate__animated animate__fadeInUp">
            <p className="text-yellow-500 font-semibold">John Doe</p>
            <p className="text-gray-400 text-sm mb-2">April 5, 2023</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg mb-4 animate__animated animate__fadeInUp">
            <p className="text-yellow-500 font-semibold">Jane Smith</p>
            <p className="text-gray-400 text-sm mb-2">March 28, 2023</p>
            <p>
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
              quis sem at nibh elementum imperdiet.
            </p>
          </div>
          <Button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
}
