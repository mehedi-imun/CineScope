import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function RatingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Ratings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>RATE THIS</DialogTitle>
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
          <Button type="submit" className="w-full">
            Rate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
