import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Shuttle Now",
        description: [
            "Pitched Shuttle Now to Voyago Transportation, Attridge Transportation, McMaster Parking Services and McMaster Business Development Oﬃcer",
            "Collaborating with McMaster Parking Services and Attridge Transportation to integrate the solution into campus-wide transit operations, projected to serve over 25,000 students and staﬀ annually",
            "Leading a team where we developed a real-time GPS tracking system, enabling users to intuitively view shuttle bus locations on campus, reducing waiting time uncertainty",
        ],
        image: "/projects/shuttleNow.png",
        tags: ["React Native", "GPS", "Business"],
        githubUrl: "https://github.com/shuttlenow",
    },
    {
        id: 2,
        title: "Gym Productivity App (DBAC-Companion-App)",
        description: [
            "Designing and developing an app to enhance gym (David Braley Athletic Centre) user experience for students at McMaster University, featuring real-time occupancy tracking and equipment availability",
            "Implementing a Booking System for fitness classes and facilities, reducing overcrowding and wait times",
        ],
        image: "/projects/dbac.webp",
        tags: ["React Native", "TailwindCSS", "NodeJS", "ExpressJS", "Docker", "GKE", "PostgreSQL"],
        githubUrl: "https://github.com/DSC-McMaster-U/DBAC-Companion-App",
    },
    {
        id: 3,
        title: "Stock Predict",
        description: [
            "An applications that predict tomorrow’s S&P 500 index price using historical data. And cleaning up the data with pandas",
            "Training a random forest model and make predictions using back-testing. Then, improve the model 48% by adding predictors",
        ],
        image: "/projects/stock.jpg",
        tags: ["React", "TailwindCSS", "MongoDB"],
        githubUrl: "https://github.com/ericpark11/StockPredict",
    },
];


export const Projects = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are soe of my recent projects. Each projects was carefully crafted
                </p>

                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <ul className="text-left text-muted-foreground text-sm mb-4 list-disc list-inside space-y-1">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a 
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={20}/>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
                <div className="text-center mt-12">
                    <a  
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/ericpark11"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    )
};


