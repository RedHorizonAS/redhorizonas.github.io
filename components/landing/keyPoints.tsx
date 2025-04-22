import { Card, CardContent } from "@/components/ui/card";

const keyPoints = [
    {
        name: "Cloud",
        description: "Our solutions are cloud native and can be managed by us or you, run it in the cloud or on-premise",
        bgClass: "bg-gradient-to-br from-tech-red/20 to-tech-red/5",
        borderClass: "border-tech-red/20"
    },
    {
        name: "Availability",
        description: "Using web means it's available everywhere you want",
        bgClass: "bg-gradient-to-br from-red-500/10 to-red-500/5",
        borderClass: "border-red-500/20"
    },
    {
        name: "Scalable",
        description: "Our solutions are built for scale, scale it with servers on-premise or use kubernetes in the cloud",
        bgClass: "bg-gradient-to-br from-red-400/10 to-red-400/5",
        borderClass: "border-red-400/20"
    },
    {
        name: "Continous Delivery",
        description: "We focus on delivering updates all the time to improve the products, a new feature can be deployed in minutes",
        bgClass: "bg-gradient-to-br from-red-300/10 to-red-300/5",
        borderClass: "border-red-300/20"
    },
    {
        name: "User Experience",
        description: "A good user experience is important, it should be easy to use our applications.",
        bgClass: "bg-gradient-to-br from-red-200/10 to-red-200/5",
        borderClass: "border-red-200/20"
    },
    {
        name: "Integrations",
        description: "We integrate with other systems and hardware, creating a unified simple to use solution to the end users",
        bgClass: "bg-gradient-to-br from-red-100/10 to-red-100/5",
        borderClass: "border-red-100/20"
    }
];

const KeyPoints = () => {
    return (
        <section id="keypoints" className="py-24 px-6 bg-gradient-dark">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our <span className="text-gradient-red">Key Focus</span>
                    </h2>
                    <p className="text-tech-mediumGray max-w-2xl mx-auto">
                        Our focus is to bring modern solutions to the defense industry, taking advantage of all technology available
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyPoints.map((industry, index) => (
                        <Card
                            key={index}
                            className={`border ${industry.borderClass} ${industry.bgClass} hover-scale card-hover`}
                        >
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                                <p className="text-tech-mediumGray">{industry.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyPoints;