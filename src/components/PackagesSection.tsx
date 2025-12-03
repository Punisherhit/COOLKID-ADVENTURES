import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bike, Camera, Droplets, ShirtIcon, Users, MapPin } from "lucide-react";

const packages = [
  {
    id: "entrance-guides",
    title: "Entrance & Guides",
    icon: Users,
    description: "Entry fees and professional guiding services",
    items: [
      { name: "Entrance (Residence)", price: 300, unit: "per person" },
      { name: "Entrance (Non-Residence)", price: 500, unit: "per person" },
      { name: "Guiding Fees", price: 500, unit: "per group" },
    ],
  },
  {
    id: "quad-biking",
    title: "Quad Bike Riding",
    icon: Bike,
    description: "Available daily from 8AM – 6:30 PM",
    items: [
      { name: "1 Hour Ride", price: 5000 },
      { name: "40 Minutes Ride", price: 4500 },
      { name: "30 Minutes Ride", price: 3500 },
      { name: "20 Minutes Ride", price: 2500 },
      { name: "15 Minutes Ride", price: 2000 },
      { name: "10 Minutes Ride", price: 1500 },
      { name: "5 Minutes Ride", price: 1000 },
    ],
  },
  {
    id: "clothing-gear",
    title: "Clothing & Gear",
    icon: ShirtIcon,
    description: "Traditional attire and accessories",
    items: [
      { name: "Arafat (Hire)", price: 200 },
      { name: "Arafat (Buy)", price: 1000 },
      { name: "Buibui (Hire)", price: 300 },
      { name: "Kanzu (Hire)", price: 300 },
      { name: "Shoes (Hire)", price: 100 },
      { name: "Sun Glasses (Buy)", price: 400 },
    ],
  },
  {
    id: "water-packages",
    title: "Refreshments",
    icon: Droplets,
    description: "Stay hydrated in the desert",
    items: [
      { name: "Dafu", price: 100 },
      { name: "Maji Ndogo", price: 50 },
      { name: "Maji Kubwa", price: 100 },
    ],
  },
  {
    id: "photography",
    title: "Photography Package",
    icon: Camera,
    description: "Professional photo sessions",
    items: [
      { name: "10 Edited Pictures", price: 1500 },
    ],
  },
  {
    id: "special",
    title: "Special Packages",
    icon: MapPin,
    description: "Exclusive experiences",
    items: [
      { name: "Artists Video Clips (Location + 5 Guides)", price: 10000 },
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            OUR PACKAGES
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Choose from our wide range of services and experiences
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {packages.map((pkg, index) => (
              <AccordionItem 
                key={pkg.id} 
                value={pkg.id}
                className="card-service border-none px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <pkg.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground">
                        {pkg.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {pkg.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-4 space-y-3">
                    {pkg.items.map((item, i) => (
                      <div 
                        key={i}
                        className="flex justify-between items-center py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <span className="font-body text-foreground">{item.name}</span>
                        <span className="font-display text-lg text-primary">
                          KES {item.price.toLocaleString()}
                          {item.unit && <span className="text-sm text-muted-foreground ml-1">/{item.unit}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
