import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              お問い合わせ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  お名前
                </label>
                <Input id="name" type="text" placeholder="山田 太郎" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  メールアドレス
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  お問い合わせ内容
                </label>
                <Textarea
                  id="message"
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                送信する
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
