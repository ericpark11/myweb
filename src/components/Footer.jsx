import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="py-12 px-4 backdrop-blur relative border-border mt-12 pt-8 flex flex-col justify-center items-center gap-4">
            <a 
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
                <ArrowUp />
            </a>
            <p className="text-sm text-muted-foreground text-center mt-10">
                &copy; {new Date().getFullYear()} EricPark. All rights reserved.
            </p>
        </footer>
    )
}
