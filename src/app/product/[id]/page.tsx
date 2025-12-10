import { ProductDetail } from "@/components";

interface Props {
  params: { id: string };
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  return <ProductDetail product={product} />;
}
