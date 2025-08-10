 import { pizzas } from "@/data";
import { PageType } from "@/Types/type";
import { redirect } from "next/navigation";
import { Content } from "./_components/content";

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
    <Content product={product}/>
  );
};

export default ProductPage;
