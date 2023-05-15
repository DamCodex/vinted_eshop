"use client";

import {
  GiArmoredPants,
  GiSocks,
  GiPirateCoat,
  GiConverseShoe,
  GiPoloShirt,
} from "react-icons/gi";
import { BsWatch, BsHandbagFill } from "react-icons/bs";
import { GiEmeraldNecklace } from "react-icons/gi";
import CategoryBox from "./CategoryBox";
import Image from "next/image";
import { useState } from "react";

export const categories = [
  {
    label: "Chaussettes",
    icon: GiSocks,
  },
  {
    label: "Chaussures",
    icon: GiConverseShoe,
  },
  {
    label: "Collier",
    icon: GiEmeraldNecklace,
  },
  {
    label: "Manteau",
    icon: GiPirateCoat,
  },
  {
    label: "Montre",
    icon: BsWatch,
  },
  {
    label: "Pantalon",
    icon: GiArmoredPants,
  },
  {
    label: "Tee-shirt",
    icon: GiPoloShirt,
  },
  {
    label: "Sac",
    icon: BsHandbagFill,
  },
];

export default function Categories() {
  const [selectLabel, setSelectLabel] = useState(null);

  return (
    <>
      <div className="px-6 pt-3 flex flex-row items-center justify-between gap-2 border-b border-neutral-200 shadow-sm overflow-x-auto scrollbar-hide">
        {categories.map((item, index) => (
          <CategoryBox key={index}
            icon={item.icon}
            label={item.label}
            setSelectLabel={setSelectLabel}
            selected={selectLabel === item.label}
          />
        ))}
      </div>
    </>
  );
}
