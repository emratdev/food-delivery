import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative w-full h-1/3 md:h-1/2 p-8 flex items-center"
        >
          <Image
            src={category.img!} 
            alt={category.title}
            fill
            className="object-cover"
          />
          <div
            className={`relative z-10 w-1/2 ${
              category.color === "white" ? "text-white" : "text-black"
            }`}
          >
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm py-6">{category.desc}</p>
            <button
              className={`py-2 px-4 rounded-md ${
                category.color === "white"
                  ? "bg-white text-red-500"
                  : "bg-black text-white"
              }`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
