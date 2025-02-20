"use client"
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h4 className="text-xl md:text-4xl tracking-tighter max-w-xl text-left font-regular">
                Contact us
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                If you got any questions, please do not hesitate
              </p>
            </div>
            <a href="mailto:contact@redhorizon.no">

              <Button className="gap-4" variant="outline">
                Reach out <Mail className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div>
            <Badge variant="outline">FAQ</Badge>
          </div>
          {resources.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>
                {question}
              </AccordionTrigger>
              <AccordionContent>
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

const resources = [
  {
    question: "What does the company specialize in?",
    answer: "We specialize in creating innovative software solutions for air defense, focusing on improving training efficiency and effectiveness.",
  },
  {
    question: "Where is the company based?",
    answer: "Our team operates remotely but is primarily based in Norway.",
  },
  {
    question: "How many people are in the company?",
    answer: "We are a team of four highly experienced professionals.",
  },
  {
    question: "What is your main product?",
    answer: "Our main product is a web-based service that allows remote control of ground-based threat signal hardware to train fighter pilots in complex scenarios.",
  },
  {
    question: "What is your mission?",
    answer: "Our mission is to drive innovation in air defense by securely hosting unclassified services online, making advanced training tools accessible and efficient.",
  },
  {
    question: "How can I contact your company?",
    answer: "You can reach us through email at contact@redhorizon.no",
  },
  {
    question: "Who are your customers?",
    answer: "Our primary customers include defense organizations and contractors looking for modern, effective training solutions.",
  },
  {
    question: "How long have you been operating?",
    answer: "Our team officially started working together in 2022, but we bring decades of industry experience to the table.",
  },
];
