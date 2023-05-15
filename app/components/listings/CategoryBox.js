"use client";

import { useCallback } from "react";
import { IconType } from "react-icons";
import { useSearchParams } from "next/navigation";

export default function CategoryBox({ icon: Icon, label, setSelectLabel, selected }) {

  const handleClick = useCallback(() => {
    console.log("currQuery", label);
    setSelectLabel(label)
  });

  return (
    <>
      <div
        onClick={handleClick}
        className={`pb-2 min-w-[80px] flex flex-col items-center justify-center gap-2 hover:text-neutral-800 border-b-2 transition cursor-pointer
      ${selected ? "border-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
      >
        <Icon size={21} />
        <div className="font-medium text-sm">{label}</div>
      </div>
    </>
  );
}
