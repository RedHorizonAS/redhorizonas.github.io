"use client"
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => (

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
