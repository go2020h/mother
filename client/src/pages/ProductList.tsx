import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

// APIから製品を取得する関数を定義
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  return response.json();
};

export default function ProductList() {
  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  // 以下から同じ
  const bracelets = products.filter(product => product.category === "bracelet");
  const straps = products.filter(product => product.category === "strap");

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 ml-[300px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="aspect-square" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 ml-[300px]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">MOTHER Bracelet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bracelets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {straps.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}