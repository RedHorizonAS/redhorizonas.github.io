import { CheckCircle } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-tech-gray">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                About <span className="text-gradient-red">Red Horizon</span>
                            </h2>
                            <p className="text-tech-mediumGray">
                                We specialize in bridging traditional defense industry with modern technology solutions.
                            </p>
                        </div>

                        <p className="text-tech-lightGray">
                            We are a team of four seasoned professionals with decades of combined experience and a passion for innovation.
                            Our maturity and expertise, coupled with fresh ideas, enable us to tackle complex challenges in the air defense sector.
                            Our mission is to enhance military training by safely unclassifying and hosting services on the internet, driving innovation while protecting sensitive information.
                            Committed to excellence, we support defense teams with tools that save time, resources, and lives.
                            We are here to help.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-tech-red flex-shrink-0" />
                                <p>Over 35 years of experience working in defense</p>
                            </div>
                            <div className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-tech-red flex-shrink-0" />
                                <p>Over 10 years of experience in tech</p>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-tech-red flex-shrink-0" />
                                <p>Team of specialists with deep industry-specific knowledge</p>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-tech-red flex-shrink-0" />
                                <p>Proven methodology for seamless digital transformation</p>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-tech-red flex-shrink-0" />
                                <p>Long-term partnerships focused on sustainable growth</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="absolute -inset-4 bg-gradient-to-r from-tech-red/20 to-tech-red/5 rounded-lg blur-xl opacity-70"></div>
                        <div className="relative bg-tech-darkGray border border-tech-red/20 rounded-lg p-6 lg:p-10">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="text-center p-5 rounded-lg bg-tech-gray/50">
                                    <div className="text-4xl font-bold text-tech-red mb-2">2022</div>
                                    <div className="text-sm text-tech-mediumGray">Established</div>
                                </div>

                                <div className="text-center p-5 rounded-lg bg-tech-gray/50">
                                    <div className="text-4xl font-bold text-tech-red mb-2">4+</div>
                                    <div className="text-sm text-tech-mediumGray">Professionals working on our products</div>
                                </div>

                                <div className="text-center p-5 rounded-lg bg-tech-gray/50">
                                    <div className="text-4xl font-bold text-tech-red mb-2">2+</div>
                                    <div className="text-sm text-tech-mediumGray">Projects</div>
                                </div>

                                <div className="text-center p-5 rounded-lg bg-tech-gray/50">
                                    <div className="text-4xl font-bold text-tech-red mb-2">24/7</div>
                                    <div className="text-sm text-tech-mediumGray">Technical Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;