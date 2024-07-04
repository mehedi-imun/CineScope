import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import movieImage from "@/assets/inception.png";
import { RatingModal } from "../RatingModal/RatingMdal";

type CardProps = React.ComponentProps<typeof Card>;

export function MovieCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn(className)} {...props}>
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
      <CardFooter>
        <RatingModal />
      </CardFooter>
    </Card>
  );
}
