export default function handler(req, res) {
    // storage.ts のデータを基にした商品データ
    const products = [
      {
        id: 1,
        name: "MOTHER Bracelet -Black",
        description: "最新のヘルスケアテクノロジーを搭載したスマートブレスレット",
        price: "44000",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/Black.png",
        category: "bracelet",
        inStock: true
      },
      {
        id: 2,
        name: "MOTHER Bracelet -White",
        description: "最新のヘルスケアテクノロジーを搭載したスマートブレスレット",
        price: "44000",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/White.png",
        category: "bracelet",
        inStock: true
      },
      {
        id: 3,
        name: "Strap Link -Black",
        description: "MOTHERブレスレット用の交換ストラップ",
        price: "3300",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/1_3e1b36e7-2fe4-44c9-a85a-8a8694d69938.png",
        category: "strap",
        inStock: true
      },
      {
        id: 4,
        name: "Strap Link -White",
        description: "MOTHERブレスレット用の交換ストラップ",
        price: "3300",
        imageUrl: "https://cdn.shopify.com/s/files/1/0611/4476/0578/files/4_6b099f5b-c33e-441b-8731-f424593d7f22.png",
        category: "strap",
        inStock: true
      }
    ];
  
    // URLから商品IDを取得
    const urlParts = req.url.split('/');
    const productId = urlParts[urlParts.length - 1];
  
    // リクエストに応じて処理を分岐
    if (req.method === 'GET') {
      // 特定の商品IDが指定されている場合
      if (productId && productId !== 'products') {
        const product = products.find(p => p.id.toString() === productId);
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } else {
        // 全商品データを返す
        res.status(200).json(products);
      }
    } else {
      // GET以外のメソッドには405エラー（Method Not Allowed）を返す
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }