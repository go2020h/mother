import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

const getProductSlug = (product: Product) => {
  const slugMap: Record<string, string> = {
    "MOTHER Bracelet -Black": "mother-black",
    "MOTHER Bracelet -White": "mother-white",
    "Strap Link -Black": "strap-link-black",
    "Strap Link -White": "strap-link-white"
  };
  return slugMap[product.name] || `product-${product.id}`;
};

export default function ProductCard({ product }: ProductCardProps) {
  const slug = getProductSlug(product);

  return (
    <Link href={`/products/${slug}`}>
      <Card className="cursor-pointer transition-transform hover:scale-[1.02]">
        <CardContent className="p-4">
          <div className="aspect-square relative mb-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="font-bold mb-2">{product.name}</h3>
          <p className="text-lg">
            ¥{Number(product.price).toLocaleString()} (税込)
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}