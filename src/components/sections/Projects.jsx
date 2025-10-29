import { ArrowRight, ExternalLink, Github, Camera  } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Shuttle Now",
        description: [
            "Pioneered the proposal and product pitch of real-time shuttle bus tracking platform to Voyago Transportation, Attridge Transportation, McMaster Parking Services, and the McMaster Business Development Oﬃce, showcasing scalability and impact",
            "Leading a software team to design and develop Shuttle Now with live location updates, enabling students to view shuttle bus positions in-app and significantly reduce waiting-time uncertainty by 70%",
            "Oversaw end-to-end product lifecycle, from ideation and prototype development to deployment and stakeholder demos, ensuring alignment between technical design and user needs",
        ],
        image: "/projects/shuttleNow.png",
        tags: ["React Native", "GPS", "Business"],
        githubUrl: "https://github.com/shuttlenow",
    },
    {
        id: 2,
        title: "Auction App (Fixr)",
        description: [
            "Developed a cross-platform mobile auction app enabling real-time bidding for on-demand services, integrating dynamic pricing and live countdown features to enhance user engagement",
            "Designed and implemented backend APIs for bidding logic, time synchronization, and secure communications, ensuring fairness, data integrity, and smooth bid competition across all devices",
        ],
        image: "",
        tags: ["React Native", "TailwindCSS", "NodeJS", "ExpressJS", "Docker", "GKE", "PostgreSQL"],
        githubUrl: "",
    },
    {
        id: 3,
        title: "Gym Productivity App (DBAC-Companion-App)",
        description: [
            "Built a full-stack mobile app enhancing the David Braley Athletic Centre experience for McMaster students, with real-time gym occupancy tracking and equipment availability updates",
            "Developed a booking feature for fitness classes and facilities to minimize overcrowding and wait times by 25 minutes, improving scheduling eﬃciency for users",
        ],
        image: "/projects/dbac.webp",
        tags: ["React Native", "TailwindCSS", "NodeJS", "ExpressJS", "Docker", "GKE", "PostgreSQL"],
        githubUrl: "https://github.com/DSC-McMaster-U/DBAC-Companion-App",
    },
    // {
    //     id: 3,
    //     title: "Stock Predict",
    //     description: [
    //         "An applications that predict tomorrow’s S&P 500 index price using historical data. And cleaning up the data with pandas",
    //         "Training a random forest model and make predictions using back-testing. Then, improve the model 48% by adding predictors",
    //     ],
    //     image: "/projects/stock.jpg",
    //     tags: ["React", "TailwindCSS", "MongoDB"],
    //     githubUrl: "https://github.com/ericpark11/StockPredict",
    // },
];


export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center bg-secondary/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <Camera size={32} className="mb-2 opacity-70" />
                    <p className="text-sm font-medium">Coming Soon...</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
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
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ericpark11"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


