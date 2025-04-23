import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-dark pt-20 pb-16 px-6">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTJ6TTM0LjUgMzBoMXYxaC0xdi0xem0wLTJoMXYxaC0xdi0xem0tMnpNMzEgMzJoMXYxaC0xdi0xem0wLTJoMXYxaC0xdi0xem0tMnpNMjcuNSAzMGgxdjFoLTF2LTF6bTAtMmgxdjFoLTF2LTF6bS0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

            <div className="container mx-auto max-w-screen-xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-8 animate-fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Modernizing <span className="text-gradient-red">Defense Industries</span> with Technology
                        </h1>

                        <p className="text-xl text-tech-mediumGray max-w-xl">
                            We bring cutting-edge web solutions to the defense industry,
                            bridging the gap between traditional and modern solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#solutions" >
                                <Button className="bg-tech-red hover:bg-tech-red/90 text-white px-8 py-6 text-lg">
                                    Explore Solutions
                                </Button>
                            </a>
                            <a href="#contact" >
                                <Button variant="outline" className="group border-tech-red/40 text-white hover:bg-tech-red/10 px-8 py-6 text-lg">
                                    Contact Us
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 animate-slide-up">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-tech-red/20 to-purple-500/20 blur-xl"></div>
                            <div className="relative aspect-video rounded-lg bg-tech-gray border border-tech-red/20 overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlYTM4NGMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTJ6TTM0LjUgMzBoMXYxaC0xdi0xem0wLTJoMXYxaC0xdi0xem0tMnpNMzEgMzJoMXYxaC0xdi0xem0wLTJoMXYxaC0xdi0xem0tMnpNMjcuNSAzMGgxdjFoLTF2LTF6bTAtMmgxdjFoLTF2LTF6bS0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-lg">
                                        {/* Abstract tech elements */}
                                        <div className="h-24 rounded bg-tech-red/5 border border-tech-red/20 flex items-center justify-center">
                                            <div className="w-12 h-1 bg-tech-red/40 rounded-full"></div>
                                        </div>

                                        <div className="h-24 rounded bg-tech-red/5 border border-tech-red/20 flex items-center justify-center">
                                            <div className="w-8 h-8 border-2 border-tech-red/40 rounded-full"></div>
                                        </div>

                                        <div className="h-24 rounded bg-tech-red/5 border border-tech-red/20 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-tech-red/20 rounded"></div>
                                        </div>

                                        <div className="h-24 rounded bg-tech-red/5 border border-tech-red/20 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="w-2 h-2 bg-tech-red/40 rounded-full"></div>
                                                <div className="w-2 h-2 bg-tech-red/20 rounded-full"></div>
                                                <div className="w-2 h-2 bg-tech-red/30 rounded-full"></div>
                                                <div className="w-2 h-2 bg-tech-red/10 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;