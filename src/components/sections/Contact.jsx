import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from '@/lib/utils'
import { useToast } from "@/hooks/use-toast"
import { Description } from "@radix-ui/react-toast"
import { useState } from "react"
import emailjs from "@emailjs/browser"







export const Contact = () => {

    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await emailjs.sendForm(
                "service_z3e4rfo",
                "template_ubekbek",
                e.target,
                "mHL6TqKUV52k_TrL5"
            );
            console.log(res);

            e.target.reset(); // Reset the form inputs
        } catch (err) {
            console.error("EmailJS Error:", err);
        }

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
            setIsSubmitting(false);
        }, 1500);
    }




    return(
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-cetner text-muted-foregroumd mb-12 max-w-2xl mx-auto">
                    Have a projec tin mind or watn to collab?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> 
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                    href="mailto:park.ericyc@icloud.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                    park.ericyc@icloud.com
                                    </a>
                                </div>
                                </div>
                            </div>

                            {/* Uncomment if using phone */}
                            {/* 
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                    href="tel:+15064762122"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                    +1 (506) 476-2122
                                    </a>
                                </div>
                                </div>
                            </div>
                            */}

                            <div className="flex justify-center">
                                <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/ericpark11/" target="_blank">
                                    <Linkedin size={25} className="hover:text-[#0077B5] duration-300"/>
                                </a>
                                <a href="https://github.com/ericpark11" target="_blank">
                                    <Github size={25} className="hover:text-gray-500 duration-300"/>
                                </a>
                                <a href="https://www.instagram.com/eric.park04/" target="_blank">
                                    <Instagram size={25} className="hover:text-[#d62976] duration-300"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="bg-card p-8 rounded-lg shadow-xs"
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "} 
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-primary"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "} 
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-primary"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                >
                                    {" "} 
                                    Your Message
                                </label>
                                <textarea
                                    id="message" 
                                    name="message" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-primary resize-none"
                                    placeholder="Hello! Let's Talk"
                                />
                            </div>

                            <button 
                                id="button"
                                type="submit"
                                value="SEND" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    
                                )}>
                                    {isSubmitting ? "Sending" : "Send Message"}
                                    <Send size={16} />
                            </button>

                        </form>

                    </div>
                </div>
            </div>

        </section>
    )
}