import { Heart } from "lucide-react";
import Link from "next/dist/client/link";
import React from "react";

const FavoriteButton = () => {
  return (
    <Link href={"/favorites"} className="group relative">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span
        className="absolute -top-1 -right-2 text-xs bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full font-semibold flex 
      items-center justify-center"
      >
        0
      </span>
    </Link>
  );
};

export default FavoriteButton;
