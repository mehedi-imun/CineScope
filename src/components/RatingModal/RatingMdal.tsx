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
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { TMovie } from "@/types";
import { useAddRatingMutation } from "@/redux/api/api";
import { toast } from "sonner";

export function RatingModal({ movie }: { movie: TMovie }) {
  const { register, handleSubmit } = useForm();
  const [ratingValue, setRatingValue] = useState(0);
  const [addRating] = useAddRatingMutation();

  const onSubmit = async (values: FieldValues) => {
    const data = {
      ...values,
      rating: ratingValue,
      movie: movie?._id,
    };
    const slug = movie?.slug;
    // console.log(data);
    try {
      const res = await addRating({ data, slug }).unwrap();
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          <h1 className="text-center text-2xl ">{movie?.title}</h1>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center pt-2">
            {/* @ts-expect-error their is no type declaration file for react rating*/}
            <Rating
              emptySymbol={<Star size={40} color="orange" />}
              fullSymbol={<Star size={40} color="orange" fill="orange" />}
              fractions={2}
              initialRating={ratingValue}
              stop={10}
              onClick={(value) => setRatingValue(value)}
            />
          </div>
          <div className="grid gap-4 py-4 text-gray-900">
            <Input
              type="email"
              placeholder="Enter your email"
              className="col-span-3"
              {...register("email")}
            />
            <Input
              type="text"
              placeholder="Enter your comment"
              className="col-span-3"
              {...register("comment")}
            />
          </div>

          <DialogFooter>
            <Button color="yellow" type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
