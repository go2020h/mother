import { Product, InsertProduct } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private currentProductId: number;

  constructor() {
    this.products = new Map();
    this.currentProductId = 1;
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: InsertProduct[] = [
      {
        name: "MOTHER Bracelet -Black",
        description: "最新のヘルスケアテクノロジーを搭載したスマートブレスレット",
        price: "44000",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/Black.png",
        category: "bracelet",
        inStock: true
      },
      {
        name: "MOTHER Bracelet -White",
        description: "最新のヘルスケアテクノロジーを搭載したスマートブレスレット",
        price: "44000",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/White.png",
        category: "bracelet",
        inStock: true
      },
      {
        name: "Strap Link -Black",
        description: "MOTHERブレスレット用の交換ストラップ",
        price: "3300",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/1_3e1b36e7-2fe4-44c9-a85a-8a8694d69938.png",
        category: "strap",
        inStock: true
      },
      {
        name: "Strap Link -White",
        description: "MOTHERブレスレット用の交換ストラップ",
        price: "3300",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/4_6b099f5b-c33e-441b-8731-f424593d7f22.png",
        category: "strap",
        inStock: true
      }
    ];

    initialProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }
}

export const storage = new MemStorage();