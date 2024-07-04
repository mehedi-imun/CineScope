import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus, Star } from "lucide-react";
import Rating from "react-rating";

type TMovieProps = {
  name: string;
};

export function RatingModal({ name }: TMovieProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Ratings
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-white border-0">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold text-yellow-400">
            RATE THIS
          </DialogTitle>
          <h1 className="text-center text-2xl">{name}</h1>
          <div className="text-center pt-2">
            <Rating
              emptySymbol={<Star size={40} color="orange" />}
              fullSymbol={<Star size={40} color="orange" fill="orange" />}
              fractions={2}
              stop={10}
            />
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="col-span-3"
          />
          <Input
            id="comment"
            placeholder="Enter your comment"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button color="yellow" type="submit" className="w-full">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
