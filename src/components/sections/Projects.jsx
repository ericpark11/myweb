import { ArrowRight, ExternalLink, Github, Camera  } from "lucide-react";


const projects = [
    {
        "id": 1,
        "title": "Gavel",
        "date": "July 2025 – Present",
        "description": [
            "Leading two software engineers building a cross-platform mobile marketplace with real-time bidding for products and services, dynamic pricing, and live countdowns.",
            "Shipped ratings and reviews, real-time activity feeds, saved and archived items, and moderation-aware notifications to build trust and repeat engagement."
        ],
        "tags": [
            "React Native",
            "Firebase",
            "NativeWind",
            "Gemini",
            "OpenAI"
        ],
        "demoUrl": "https://www.gavel-app.com",
        "image": "/projects/gavel.png"
    },
    {
        "id": 2,
        "title": "Shuttle Now",
        "date": "September 2023 – May 2025",
        "description": [
            "Architected a crowdsourced GPS shuttle-tracking platform and took it from prototype to formal pitches with Voyago Transportation, Attridge Transportation, and McMaster Parking & Business Development.",
            "Led the software team shipping live in-app shuttle positions, replacing schedule guesswork with real-time crowdsourced location data."
        ],
        "image": "/projects/shuttleNow.png",
        "tags": [
            "React Native",
            "Crowdsourcing",
            "GPS"
        ],
        "githubUrl": "https://github.com/shuttlenow"
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

];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Mobile applications for real-time bidding, campus transit, and the student gym experience.
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


