import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { Link } from "@radix-ui/react-navigation-menu";
import { Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <div className="mx-auto container  ">
     <div className="flex  items-center justify-between border-b-2 py-3 ">
      <Link to="/" className="flex items-center">
        <h3 className="font-extrabold bg-yellow-400 p-1 rounded-md">
          CineScope{" "}
        </h3>{" "}
        <Clapperboard className="mx-3 " />
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList>
          <div className="flex justify-end">
            <NavigationMenuItem>
              <Link to="/movies">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Movies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
   </div>
  );
}
