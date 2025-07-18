import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

// ✅ props turi — hech qanday Promise yo‘q
type Props = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const filteredItems = pizzas.filter(
    (item) => item.category === params.category
  );

  return (
    <div className="flex flex-wrap text-red-500">
      {filteredItems.map((item) => (
        <Link
          key={item.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 
          flex flex-col justify-between group even:bg-fuchsia-50"
          href={`/product/${item.id}`}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ✅ generateStaticParams — bu to‘g‘ri format
export async function generateStaticParams() {
  const categories = ["pizza", "burger", "salad"];
  return categories.map((category) => ({
    category,
  }));
}
