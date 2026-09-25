import { ArrowRight, ExternalLink, Github } from "lucide-react";


const experiences = [
    {
        "id": 1,
        "title": "Acceldata",
        "role": "Sales Engineer",
        "date": "September 2026 – Present",
        "location": "Kitchener, Ontario",
        "tags": [
            "Airflow",
            "Kafka",
            "Spark",
            "AWS",
            "Azure"
        ],
        "description": [
            "Partner with prospective clients to understand technical and business requirements, delivering tailored product demonstrations and solution recommendations.",
            "Collaborate with sales, engineering, and product teams on technical solutions, integration questions, and translating product capabilities into business value."
        ],
        "image": "/experiences/acceldata.webp"
    },
    {
        "id": 2,
        "title": "Scotiabank · Global Markets",
        "role": "Market Risk Engineer Co-op",
        "date": "May 2026 – August 2026",
        "location": "Toronto, Ontario",
        "tags": [
            "Java",
            "Dropwizard",
            "Cassandra",
            "OpenAPI / Swagger",
            "Docker",
            "Maven"
        ],
        "description": [
            "Built Java REST APIs and CSV-processing workflows to ingest, normalize, and classify datasets, generate historical outputs, and package results into validated ZIP artifacts.",
            "Implemented business-rule classification and transformations using reference metadata, configurable input lists, matrix data, and delivery-term calculations.",
            "Designed Cassandra persistence schemas and added JUnit regression coverage for output generation, integrity checks, completion artifacts, deterministic processing, and classification."
        ],
        "image": "/experiences/scotiabank.png"
    },
    {
        "id": 3,
        "title": "Scotiabank · Global Wealth",
        "role": "Software Engineer Co-op",
        "date": "January 2026 – May 2026",
        "location": "Toronto, Ontario",
        "tags": [
            "Java",
            "Spring Boot",
            "Next.js",
            "FastAPI",
            "Playwright",
            "PostgreSQL",
            "Cosmos DB",
            "Azure",
            "Docker"
        ],
        "description": [
            "Built a CRM platform centralizing client data for wealth advisors, reducing data-collection time by approximately 40% in pre/post workflow benchmarks.",
            "Shipped an LLM chat assistant for natural-language client queries, with multi-agent routing, session persistence, and Cosmos DB caching over PostgreSQL storage.",
            "Built an API-driven QA platform that generates user stories and executes them as Playwright tests, reducing manual test-case authoring.",
            "Added a human approval gate before test execution and debuggable reports after each run, giving QA visibility and sign-off control."
        ],
        "image": "/experiences/scotiabank.png"
    },
    {
        "id": 4,
        "title": "TFI International",
        "role": "Data Engineer Co-op",
        "date": "May 2025 – December 2025",
        "location": "Mississauga, Ontario",
        "image": "/experiences/tfi.png",
        "tags": [
            "Python",
            "Azure AI",
            "MongoDB",
            "SQL",
            "Selenium",
            "CI/CD",
            "Unit Testing"
        ],
        "description": [
            "Engineered an Azure AI OCR document-extraction platform with standardized validation pipelines, cutting per-document processing time by approximately 30%, measured from processing logs.",
            "Built a Python/Selenium bot to scrape and rank freight offers using real-time logistics data; monthly load reports showed approximately 40% more truck-load acquisitions after rollout.",
            "Eliminated most manual operations data entry through integration pipelines syncing internal databases with external RESTful APIs and third-party platforms."
        ]
    },
    {
        "id": 5,
        "title": "JOAS Korea",
        "role": "Full Stack Software Engineer Intern",
        "date": "May 2024 – August 2024",
        "location": "Seoul, Korea",
        "image": "/experiences/joas.jpeg",
        "tags": [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "MongoDB",
            "Firebase"
        ],
        "demoUrl": "https://www.joasnetworks.com/",
        "description": [
            "Launched JOAS’s first international website, built for global traffic, driving a 10% increase in overseas web traffic.",
            "Implemented multilingual SEO, hreflang, structured metadata, Google Analytics event tracking, and image and bundle optimizations to improve regional visibility and performance."
        ]
    }
,
    {
        id: 6,
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
                                    <p className="text-sm text-muted-foreground font-semibold mb-1">{experience.date}{experience.location ? ` · ${experience.location}` : ""}</p>
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
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {experience.githubUrl && (
                                            <a
                                                href={experience.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
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
                                                rel="noopener noreferrer"
                        href="/Eric_Park_Resume.pdf"
                    >
                        Check My Resume <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};



