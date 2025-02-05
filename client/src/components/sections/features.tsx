import { Card, CardContent } from "@/components/ui/card";
import { Battery, Heart, ThermometerSun, Footprints } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "充電不要",
      description: "体温発電技術により、充電の手間から解放",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "24時間モニタリング",
      description: "心拍数、睡眠、活動量を常時計測",
    },
    {
      icon: <ThermometerSun className="h-8 w-8" />,
      title: "体表温測定",
      description: "体表温から健康状態をチェック",
    },
    {
      icon: <Footprints className="h-8 w-8" />,
      title: "歩数計測",
      description: "1日の活動量を正確に記録",
    },
  ];

  return (
    <section id="features" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">主な特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
