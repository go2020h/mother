import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">製品のメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">継続的なモニタリング</h3>
              <p className="text-muted-foreground">
                充電の必要がないため、24時間365日途切れることなくデータを収集。より正確な健康管理が可能に。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">シンプルな操作性</h3>
              <p className="text-muted-foreground">
                余計な機能を省いた、健康管理に特化したデザイン。直感的な操作で誰でも簡単に使用可能。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">高品質な日本製</h3>
              <p className="text-muted-foreground">
                キヤノン電子と三栄電子による信頼性の高い製造。確かな品質で長期使用も安心。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
