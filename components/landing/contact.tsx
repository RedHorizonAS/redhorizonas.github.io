import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";
import { FAQ } from "./faq";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-tech-darkGray">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Ready to <span className="text-gradient-red">Modernize</span>?
                            </h2>
                            <p className="text-tech-mediumGray max-w-md">
                                Get in touch with our team to discuss how we can help with modernizing a current solution or to bring our experience into a new project
                            </p>
                        </div>


                    </div>
                    <div className="space-y-5 pt-4">
                        {/* <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Our Office</h3>
                                <p className="text-tech-mediumGray">
                                    1234 Innovation Drive, Tech City, TC 98765
                                </p>
                            </div> */}

                        <div className="space-y-2">
                            <a href="mailto:contact@redhorizon.no">
                                <Button className="w-1/2 bg-tech-red hover:bg-tech-red/90 text-white group">
                                    Reach out <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                                </Button>
                            </a>
                        </div>
                        {/* 
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Business Hours</h3>
                                <p className="text-tech-mediumGray">
                                    Monday - Friday: 9am - 6pm<br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div> */}
                    </div>
                    {/* <div className="lg:col-span-2">
                        <FAQ />
                    </div> */}

                    <div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;