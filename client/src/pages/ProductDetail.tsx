import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { useState } from "react";
import { type Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const getProductSlugMap = () => ({
  "mother-black": "1",
  "mother-white": "2",
  "strap-link-black": "3",
  "strap-link-white": "4"
});

const getProductImages = (slug: string) => {
  if (slug === "mother-black") {
    return [
      "https://mother-bracelet.com/cdn/shop/files/Black_600x600.png?v=1733989692",
      "https://mother-bracelet.com/cdn/shop/products/Product_MB_B_up_600x600.webp?v=1733989713",
      "https://mother-bracelet.com/cdn/shop/products/Product_MB_W_B_e414be46-8497-403b-86b1-f267a594233b_600x600.webp?v=1691029866",
      "https://mother-bracelet.com/cdn/shop/products/Product_app_9c221268-11de-475a-8c03-2929cc618ec9_600x600.webp?v=1733989713",
      "https://mother-bracelet.com/cdn/shop/files/2_b860d7c7-f99e-485a-863f-e2a70ccc7001_600x600.png?v=1691030503"
    ];
  } else if (slug === "mother-white") {
    return [
      "https://mother-bracelet.com/cdn/shop/files/White_600x600.png?v=1691029903",
      "https://mother-bracelet.com/cdn/shop/products/Product_MB_W_up_600x600.webp?v=1733989713",
      "https://mother-bracelet.com/cdn/shop/products/Product_MB_W_B_600x600.webp?v=1691029902",
      "https://mother-bracelet.com/cdn/shop/products/Product_app_81de6f5f-73b7-405c-a2c3-2928404cb6e3_600x600.webp?v=1691029902",
      "https://mother-bracelet.com/cdn/shop/files/2_600x600.png?v=1733989713"
    ];
  } else if (slug === "strap-link-black") {
    return [
      "https://mother-bracelet.com/cdn/shop/files/1_3e1b36e7-2fe4-44c9-a85a-8a8694d69938_400x.png?v=1706240825"
    ];
  } else if (slug === "strap-link-white") {
    return [
      "https://mother-bracelet.com/cdn/shop/files/4_6b099f5b-c33e-441b-8731-f424593d7f22_400x.png?v=1706240846"
    ];
  }
  return [];
};

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const slugMap = getProductSlugMap();
  const productId = slugMap[slug as keyof typeof slugMap];

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: async () => {
      // 全製品を取得し、その中から該当IDの商品をフィルタリング
      const response = await fetch('/api/products');
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      const products = await response.json();
      const foundProduct = products.find((p: Product) => p.id.toString() === productId);
      
      if (!foundProduct) {
        throw new Error(`Product with ID ${productId} not found`);
      }
      
      return foundProduct;
    },
    enabled: !!productId
  });

  const productImages = getProductImages(slug || "mother-black");

  if (isLoading) {
    return (
      <div className="container max-w-5xl mx-auto px-12 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-[400px]">
            <Skeleton className="aspect-square mb-4" />
            <div className="grid grid-cols-5 gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="aspect-square" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const description = slug?.includes("strap-link") ? (
    <>
      <p>MOTHER BraceletのStrapLinkは、簡単にお好みのバンドに交換できる革新的なアクセサリーです。付属のナイロン型バンドと組み合わせることで、シーンに合わせてスタイルを自由にカスタマイズできます。</p>
      <p className="mt-4">ナイロンバンドは軽くて柔らかく、肌に優しくフィットし長時間の使用でも快適です。通気性が高く、汗をかいてもすぐに乾き、ムレにくいため、ストレスフリーな着け心地が魅力です。また、柔軟性があり着脱がしやすく、手首にぴったりフィットするので、日常生活での利便性が向上します。</p>
    </>
  ) : (
    <>
      <p>世界初、充電不要の活動量計MOTHER Bracelet。</p>
      <p className="mt-4">健康状態を把握するために重要な「歩数・睡眠・体表温・心拍数・消費カロリー」を常時計測します。</p>
      <p className="mt-4">
        サイズ：W40×H12.5×D23mm
        <br />
        重量：本体18g、バンド12g
      </p>
      <p className="mt-4">ご注文から1週間以内でお届け予定</p>
    </>
  );

  return (
    <div className="container max-w-5xl mx-auto px-12 pt-24 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-[400px]">
          <div className="aspect-square mb-4 bg-white">
            <img
              src={productImages[selectedImage]}
              alt={`${product.name} - 画像 ${selectedImage + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
          {productImages.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square border-2 ${selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - サムネイル ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          )}
          <div className="manual mt-4">
            <a
              href="https://mother-bracelet.com/manual"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              取り扱い説明書（PDF）
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-3xl mb-4">{product.name}</h1>
          <div className="reviews-badge mb-6">
            <span className="shopify-product-reviews-badge"></span>
          </div>
          <div className="price_box mb-6">
            <p className="text-2xl">
              ¥{Number(product.price).toLocaleString()} (税込)
            </p>
          </div>
          <div className="spec mb-8 space-y-4">
            {description}
          </div>

          <Button size="lg" className="w-fit rounded-full mb-8 px-8 py-6 text-lg">
            カートに追加
          </Button>

          <div className="app mb-8 text-center">
            <p className="text-lg font-bold mb-4">Get MOTHER App</p>
            <div className="flex justify-center items-center gap-2">
              <a href="https://apps.apple.com/jp/app/mother-bracelet/id1584764402" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.shopify.com/s/files/1/0611/4476/0578/files/badge_appstore.svg?v=1638851244"
                  alt="App Storeからダウンロード"
                  className="h-[48px] object-contain cursor-pointer"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=jp.co.medirom.mother" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.shopify.com/s/files/1/0611/4476/0578/files/badge_googleplay.svg?v=1638851244"
                  alt="Google Playで手に入れよう"
                  className="h-[48px] object-contain cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="detail">
            <p className="font-bold mb-4">スペック：</p>
            <ul className="flex flex-wrap gap-2 mb-6">
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">生活防水</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">-10℃~+45℃</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">ソーラーパネル</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">温度センサー</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">加速度センサー</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">ジャイロスコープ</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">PPG心拍センサー</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">同梱物（スターター）</li>
              <li className="inline-block bg-black text-white px-3 py-1 rounded text-sm w-fit">LEDおよび振動モーター</li>
            </ul>
            <div className="text-sm text-gray-600">
              <p>送料：無料</p>
              <p>配送範囲：日本国内限定</p>
              <p>キャンセル：ご注文から商品の発送手続き前まで可能</p>
              <p className="whitespace-pre-line">
                返品について：未開封・未使用の場合で、かつ、商品到着後8日以内に当社にご連絡をいただいた場合可能
                ※送料はお客様のご負担となります。
                ※メーカー保証期間内の故障（MOTHER Bracelet が動作しなくなった等）については新しい商品と交換いたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}