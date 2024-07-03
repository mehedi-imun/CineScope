import { Star, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function MovieCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="flex  items-center">
          <Star />
          <p>8</p>
        </div>

        <CardTitle>Inception</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Add Ratings
        </Button>
      </CardFooter>
    </Card>
  );
}
