import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes organic farming sustainable?",
      answer: "Organic farming is sustainable because it relies on natural processes and avoids synthetic chemicals, preserving soil health, protecting biodiversity, and reducing environmental pollution for future generations.",
    },
    {
      question: "How long does certification take?",
      answer: "The organic certification process typically takes 2-3 years, as land must be free from prohibited substances for 36 months before crops can be certified organic.",
    },
    {
      question: "What support do you provide?",
      answer: "We provide comprehensive support including soil testing, crop planning, training programs, equipment recommendations, and ongoing consultation throughout your organic farming journey.",
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with agricultural lenders to help farmers access financing for sustainable equipment upgrades and organic certification processes.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Common Questions About Organic Farming
            </h2>
            <p className="text-muted-foreground mb-6">
              Find answers to frequently asked questions about sustainable agriculture and our services.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Need more help?</span>
              <a href="#" className="text-primary font-medium hover:underline">Contact Us →</a>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
