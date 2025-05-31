import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { Hero } from "../components/sections/Hero"
import { AboutMe } from "../components/sections/AboutMe"
import { Skills } from "../components/sections/Skills"
import { Projects } from "../components/sections/Projects"
import { Contact } from "../components/sections/Contact"
import { Footer } from "../components/Footer"
import { Experiences } from "../components/sections/Experiences"
import { Achievements } from "../components/sections/Achievements"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* NavBar */}
        <NavBar />
        {/* Main Content */}
        <main>
            <Hero />
            <AboutMe />
            <Experiences />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
        </main>
        <Footer />

    </div>
  )
}