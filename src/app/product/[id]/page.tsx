import { Price } from "@/components/Price";
import { pizzas } from "@/data";
import { PageType } from "@/Types/type";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return pizzas.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductPage: PageType = async ({params }) => {
  const {id} = await params;
  if (!id) {
    redirect("/")
  }
  const product = pizzas.find((p) => p.id === Number(id));

  if (!product) {
    return <p>not found</p>;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE */}
      {product.img && (
        <div className="relative w-full h-1/2 md:h-[70%] ">
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* TEXT */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-4xl">
          {product.title}
        </h1>
        <p>{product.desc}</p>
        <Price
          price={product.price}
          id={product.id}
          options={product.options}
        />
      </div>
    </div>
  );
};

export default ProductPage;
