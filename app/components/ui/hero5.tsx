import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, Goal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["efficiency", "complexity", "control", "accuracy"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Contact us <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Enhance emitter-training with increased</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Utilizing gaps of manual work, pour some digitalization on it and
              experience increased value to your training. We are here to help
              streamlining your technology-chain. We focus on usecases specifically
              towards the airforce, but are open-minded to other defence-realted 
              usecases as-well. Our goal is to streamline complex military training, 
              making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="services">
                <Button size="lg" className="gap-4" variant="outline">
                SAM1 <Goal className="w-4 h-4" />
                </Button>
            </a>
            <a href="contact">
                <Button size="lg" className="gap-4">
                Contact us <MoveRight className="w-4 h-4" />
                </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
