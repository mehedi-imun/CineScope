import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import { Clapperboard } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex  items-center justify-between">
      <div className="flex ">
        <h3 className="font-extrabold bg-yellow-400 p-1 rounded-md">CineScope </h3>{" "}
        <Clapperboard className="mx-3" />
      </div>
      <NavigationMenu className="">
        <NavigationMenuList>
          <div className="flex justify-end">
            <NavigationMenuItem>
              <Link href="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Movies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Rating
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
