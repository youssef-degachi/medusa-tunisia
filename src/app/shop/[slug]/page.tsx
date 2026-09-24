import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacent, getProduct, products } from "@/lib/data";
import { ProductView } from "@/components/ProductView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: product.title.fr,
    description: product.summary.fr,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const { prev, next } = getAdjacent(slug);
  const index = products.indexOf(product) + 1;

  return <ProductView product={product} prev={prev} next={next} index={index} total={products.length} />;
}
