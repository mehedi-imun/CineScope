import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import movieImage from "@/assets/inception.png";
import { Link } from "react-router-dom";
import { RatingModal } from "../RatingModal/RatingMdal";

type CardProps = React.ComponentProps<typeof Card>;

export function MovieCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <Link to="/movie/1">
        <CardHeader className="p-2">
          <img src={movieImage} className="max-h-[500px]" alt="" />
        </CardHeader>
        <CardContent className="grid">
          <div className="flex  items-center gap-2">
            <Star color="orange" fill="orange" />
            <p className="text-2xl">8.7</p>
          </div>
          <CardTitle>Inception</CardTitle>
          <p className="text-xl mt-4">Sci-Fi</p>
        </CardContent>
      </Link>
      <CardFooter>
        <RatingModal name="Inception" />
      </CardFooter>
    </Card>
  );
}
