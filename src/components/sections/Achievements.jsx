
const achievements = [
    {
    id: 1,
    title: "Principal's Gold",
    description: "Recognizing students who have maintained an academic average of over 90% throughout all four years of high school",
    image: "/achievements/PrincipleGold.png",
  },
  {
    id: 2,
    title: "Coca-Cola Prize",
    description: "Awarded to students in their final year of high school. Students are recognized for their capacity to lead and serve, as well as their commitment to making a significant impact on their schools and communities",
    image: "/achievements/Coca-Cola.jpg",
  },
  {
    id: 3,
    title: "Nashwaaksis Lion’s Club",
    description: "The Nashwaaksis Lions Club was charted in 1966. It is a group of volunteers who work on various projects to raise funds to help their community",
    image: "/achievements/Nash.jpg",
  },
  {
    id: 4,
    title: "McMaster Award of Excellence",
    description: "Achievement of a final admission average in the top 10% of my Faculty",
    image: "/achievements/Excellence.png",
  },
  {
    id: 5,
    title: "Dean's Honour List",
    description: "Received Dean's Honour List Award for holding GPA above 9.5/12",
    image: "/achievements/DeansList.png",
  },
  {
    id: 6,
    title: "Global Experience Award",
    description: "An undergraduate or graduate seeking global work or volunteer experience",
    image: "/achievements/GlobalExperience.png",
  },
];

export const Achievements = () => { 
  return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    <span className="text-primary">Awards</span> &<span className="text-primary"> Honors </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  I have been fortunate to receive several scholarships throughout my academic career. 
                  These include the Nashwaaksis Lions Club Award, the Coca-Cola Prize, 
                  McMaster’s Award of Excellence, the Global Experience Award, and placement on the Dean's Honour List. 
                  I also received the Lions Principal’s Gold Award for achieving one of the highest grades in my class.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map(({ id, title, description, image }) => (
                    <div
                    key={id}
                    className="group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden"
                    >
                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover blur-[1.5px]"
                    />

                    {/* Sliding Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500">
                        <div className="bg-background/80 w-full px-5 py-4 h-15 group-hover:h-full transition-all duration-500 overflow-hidden">
                        <h3 className="text-lg font-semibold group-hover:text-primary">{title}</h3>
                        <p className="text-sm text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                            {description}
                        </p>
                        </div>
                    </div>
                    </div>

                    ))}
                </div>
            </div>
    </section>
  );
};
