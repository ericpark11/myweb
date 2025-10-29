import { ArrowRight, ExternalLink, Github } from "lucide-react";


const experiences = [
    {
        id: 1,
        title: "TFI International",
        role: "Data Engineer (Co-op)",
        description: [
            "Accomplished a 30% reduction in document processing time and a 25% boost in data accuracy by engineering an AI-powered PDF data extraction platform that automated cross-department workflows and standardized validation pipelines",
            "Increased truck-load acquisition by 40% and revenue by 15% by developing a Python/Selenium-based intelligent bidding bot that dynamically scraped, analyzed, and optimized freight oﬀers using real-time logistics data",
            "Eliminated 95% of manual data entry and cut operational delays by 20% by orchestrating data integration pipelines that connected internal databases with external RESTful APIs, ensuring seamless synchronization between business systems and third-party platforms",
        ],
        date: "May 2024 – Present",
        image: "/experiences/tfi.png",
        tags: [],
    },
    {
        id: 2,
        title: "Joas Korea",
        role: "Full-Stack Software Developer Intern",
        description: [
            "Spearheaded the full-stack development and launch of JOAS’s international website, establishing a scalable frontend and backend infrastructure to support global traﬃc and multilingual access, resulting in a robust international platform www.joasnetworks.com", 
            "Enhanced global reach and conversion rates by implementing SEO optimization, analytics integration, and performance tuning, leading to a 10% increase in overseas web traﬃc and a 0.3% rise in overall company sales"
        ],
        date: "May 2023 – August 2023",
        image: "/experiences/joas.jpeg",
        tags: ["React", "Typescript", "NextJs", "TailwindCSS", "NextIntl", "MongoDB", "Firebase"],
        demoUrl: "https://www.joasnetworks.com/",
    },
    {
        id: 3,
        title: "McMaster Parking Services",
        role: "Web Developer",
        description: [
            "Optimized WordPress site performance by implementing caching strategies, CDN integration, and image compression, achieving a 20% reduction in page load time and significantly improving overall responsiveness",
            "Improved accessibility and user experience for 5,000+ monthly visitors by conducting SEO keyword research, usability audits, and front-end enhancements, leading to higher engagement and better search visibility"
        ],
        date: "October 2023 – May 2024",
        image: "/experiences/mcmaster.png",
        tags: ["WordPress", "UI/UX"],
        demoUrl: "https://parking.mcmaster.ca/",
    },
];


export const Experiences = () => {
    return (
        <section id="experiences" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary"> Experiences </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    From building full-stack web apps to developing backend data systems and improving internal tools, I’ve worked across a range of projects that challenged me to think critically and code thoughtfully. Each experience has helped me grow as a developer and sharpen the way I approach real-world problems.
                </p>

                <div className="grid grid-cols-1 gap-8">
                    {experiences.map((experience, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col md:flex-row"
                        >
                            {/* Image hidden on mobile */}
                            <div className="hidden md:block relative w-1/2 h-full overflow-hidden">
                                <div className="absolute inset-0 bg-background/80 opacity-100 group-hover:opacity-0 transition-all duration-500 z-10"></div>
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="w-full h-[385px] bg-white object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between w-full md:w-1/2 h-full text-left">
                                <div>
                                    <h3 className="text-xl text-primary font-bold mb-1">{experience.title}</h3>
                                    <h4 className="text-md font-semibold mb-1">{experience.role}</h4>
                                    <p className="text-sm text-muted-foreground font-semibold mb-1">{experience.date}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {experience.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* <p className="text-muted-foreground text-sm ">{experience.description}</p> */}
                                    {experience.description && (
                                        <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                                            {experience.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                {(experience.demoUrl || experience.githubUrl) && (
                                    <div className="flex space-x-3 mt-4">
                                        {experience.demoUrl && (
                                            <a
                                                href={experience.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {experience.githubUrl && (
                                            <a
                                                href={experience.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/ericpark11"
                    >
                        Check My Resume <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};



