import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link } from "react-router-dom";
import { RatingModal } from "../RatingModal/RatingMdal";
import { TMovie } from "@/types";

export function MovieCard({ movie }: { movie: TMovie }) {
  return (
    <Card>
      <Link to={`/movie/${movie?.slug}`}>
        <CardHeader className="p-2">
          <img src={movie?.image} className="h-[400px]" alt="" />
        </CardHeader>
        <CardContent className="grid">
          <div className="flex  items-center gap-2">
            <Star color="orange" fill="orange" />
            <p className="text-2xl">{movie?.totalRating}</p>
          </div>
          <CardTitle>{movie?.title}</CardTitle>
          <p className="text-xl mt-4">{movie?.genre}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <RatingModal movie={movie} />
      </CardFooter>
    </Card>
  );
}
