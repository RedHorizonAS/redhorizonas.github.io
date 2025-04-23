import { Plane } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const solutionsData = [
    {
        icon: <Plane className="h-10 w-10 text-tech-red" />,
        title: "SAM-1",
        description: `Create and execute complex training scenarios in real-time with our advanced software.\n
              Our solution eliminates the need for personnel to manually activate systems, allowing facilitating personel to focus on critical tasks.\n`,
        link: "/solutions/sam"
    },
];

const Solutions = () => {
    return (
        <section id="solutions" className="py-24 px-6 bg-tech-darkGray">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our <span className="text-gradient-red">Solutions</span>
                    </h2>
                    <p className="text-tech-mediumGray max-w-2xl mx-auto">
                        We specialize in bringing modern technologies to the defense industry,
                        creating custom solutions that respect established processes while enabling digital growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    {solutionsData.map((solution, index) => (
                        <Link href={solution.link} key={index} >
                            <Card className="bg-tech-gray border-tech-gray/50 card-hover">
                                <CardHeader>
                                    <div className="p-2 w-fit rounded-lg bg-tech-darkGray mb-4">
                                        {solution.icon}
                                    </div>
                                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-tech-mediumGray text-base">
                                        {solution.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;