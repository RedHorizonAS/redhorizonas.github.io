import { MoveRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Feature74 = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-4 lg:px-16">
        <div className="lg:max-w-3xl">
          <h2 className="mb-3 text-xl md:mb-4 md:text-4xl lg:mb-6">
            About us
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
          We are a team of four seasoned professionals with decades of combined experience and a passion for innovation. 
          Our maturity and expertise, coupled with fresh ideas, enable us to tackle complex challenges in the air defense sector. 
          Our mission is to enhance military training by safely unclassifying and hosting services on the internet, driving innovation while protecting sensitive information. 
          Committed to excellence, we support defense teams with tools that save time, resources, and lives. 
          We're here to help.
            {/* We are a team of four seasoned professionals with decades of combined experience and a shared passion for innovation. As a middle-aged team, we bring together maturity, expertise, and fresh ideas to tackle complex challenges in the air defense sector.
            Our mission is to revolutionize military training by identifying which services can safely be unclassified and hosted on the internet. This approach makes it easier to drive innovation and develop better solutions while ensuring that sensitive, classified information remains secure and appropriately protected.
            Driven by our commitment to excellence and a strong belief in the power of technology to make a difference, we’re dedicated to supporting defense teams with tools that save time, resources, and lives.
            Welcome to the future of air defense training—crafted by a team that’s ready to make an impact. */}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {resources.map(({ title, name, text, img, href }) => (
            <div key={name} className="flex flex-col text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={img}
                  alt={name}
                  className="aspect-[16/9] size-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {name}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {text}
                </p>
                <div className="flex flex-col justify-between h-full">
                  <div className="gap-2">
                    <Badge>{title}</Badge>
                  </div>
                  <div className="gap-2 mt-auto">
                    <a href={href}>
                      <Button variant="secondary" size="sm" className="gap-4">
                        Contact <MoveRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    title: "CEO",
    name: "Erlend",
    img: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    text: "Wake up in the morning - Worked in the Defence and the sector for several years, and now urges to help them out.",
    href: "/contact"
  },
  {
    title: "Developer",
    name: "Julian",
    img: "https://www.shadcnblocks.com/images/block/placeholder-2.svg",
    text: "Just do it - Several years working in the defence with IT. Learned a lot, and strives to create solutions with big user value.",
    href: "/contact"
  },
  {
    title: "Developer",
    name: "Thomas",
    img: "https://www.shadcnblocks.com/images/block/placeholder-3.svg",
    text: "If it looks good, it feels good - Experience in webdevelopment in defence-sector. Always looking for the best solution.",
    href: "/contact"
  },
  {
    title: "Developer",
    name: "Magnus",
    img: "https://www.shadcnblocks.com/images/block/placeholder-4.svg",
    text: "Intuitive and efficient: Tailored solutions for defense training needs",
    href: "/contact"
  },
];