import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "計測項目は何がありますか？",
      answer: "歩数/心拍数/消費カロリー/睡眠/体表温/アクテビティが計測可能です。",
    },
    {
      question: "バンドの交換は可能ですか？",
      answer: "可能です。今後、複数の付け替えバンドを展開予定です！",
    },
    {
      question: "時計機能はありますか？",
      answer: "時計機能はありません。",
    },
    {
      question: "MOTHERアプリの対応OSは？",
      answer: "Apple iOS 13 以上、Android OS 7.0 以上を予定しております。",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
