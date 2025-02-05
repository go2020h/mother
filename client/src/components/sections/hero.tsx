import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MOTHER Bracelet
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              充電不要の次世代ヘルスケアデバイス
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                24時間365日、あなたの健康をモニタリング
              </p>
              <Button size="lg" className="w-full md:w-auto">
                詳細を見る
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="//static.makuake.com/upload/project/18232/detail_18232_16242414905571.png"
              alt="MOTHER Bracelet"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
