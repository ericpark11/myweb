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
                                Hi, I'm Eric Park — a third-year Computer Science student at McMaster University with a passion for building impactful, user-centric software.
                                I specialize in full-stack development, with experience in React, Node.js, and database technologies like MongoDB. From crafting real-time transit apps to working on automating tasks and pipelining, I love solving complex problems and learning by building.  
                        </p>

                        <p className="text-muted-foreground">
                            I'm currently looking for internship/co-op opportunities for 2027 Spring and Summer term where I can contribute to meaningful projects, grow as a developer, and collaborate with a passionate team.
                            Outside of tech, you'll probably find me in the gym, playing pool or basketball with my friends, or talking about cars.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
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
                                    Led mentorship programs and academic events through the Computer Science Society; designed and maintained websites for student-run finance initiatives. Contributing to open-source projects with Google Developer Student Club McMaster.
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
                                    Built real-time apps including a campus shuttle tracker pitched to transit providers, a gym companion app for students, and a stock market predictor with a 48% model improvement — all focused on solving real-world problems with scalable tech.
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
                                    Developed full-stack apps, optimized websites, and collaborated with teams at McMaster.
                                    Built full-stack apps and optimized websites, contributing to a 10% traffic increase and 0.3% sales growth at JOAS Korea.
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