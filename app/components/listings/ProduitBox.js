import Image from "next/image";

export default function ListProducts({ data }) {
  return (
    <>
      <div className="flex flex-col cursor-pointer">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            src={data.imageSrc}
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
        </div>
        <div className="py-1 text-sm">
        <div className="font-semibold">{data.title}</div>
        <div className="text-neutral-500">{data.price} €</div>

        </div>
      </div>
    </>
  );
}
