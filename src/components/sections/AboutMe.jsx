import { Briefcase, Code, User } from "lucide-react";



export const AboutMe = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold">
                            Who am I?
                        </h3>

                        <p className="text-muted-foreground">
                            Hi, I'm Eric Park — an Honours Computer Science co-op student with a Statistics minor at McMaster University. I hold a 3.8/4.0 GPA and expect to graduate in April 2027. My experience spans full-stack development, data engineering, AI assistants, and automated testing.
                        </p>

                        <p className="text-muted-foreground">
                            I build practical software for financial services, logistics, and mobile marketplaces. Outside of tech, you'll probably find me in the gym, playing pool or basketball with my friends, or talking about cars.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="/Eric_Park_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Check Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg">Extra Curricular</h4>
                                <p className="text-muted-foreground">
                            Involved with the Google Developer Group, DeGroote Finance & Investment Council, CS Society, DeltaHacks, and intramural sports at McMaster.
                        </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Experience</h4>
                                <p className="text-muted-foreground">
                            Leading two software engineers building Gavel, a real-time mobile bidding marketplace. Led the team behind Shuttle Now, a crowdsourced GPS shuttle tracker pitched to transit providers and McMaster stakeholders.
                        </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg">Work Experience</h4>
                                <p className="text-muted-foreground">
                            Sales engineering at Acceldata; market risk and wealth technology at Scotiabank; data engineering at TFI International; and full-stack development at JOAS Korea.
                        </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};