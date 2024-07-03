import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/avengers.jpg";
import sliderImage2 from "@/assets/justice-league-superman-banner.png";
import sliderImage3 from "@/assets/doctor-strange.jpg";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
  ];

  return (
    <Carousel
      className="w-[95%] mx-auto"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {sliderData.map((slider) => (
          <CarouselItem key={slider.id}>
            <Card>
              <CardContent className="flex items-center justify-center h-[500px] p-1">
                <img src={slider?.image} className="h-full w-full" alt="" />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
