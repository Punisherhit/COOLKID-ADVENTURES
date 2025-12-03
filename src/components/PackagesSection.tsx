import { useState } from "react";
import { Bike, Camera, Droplets, ShirtIcon, Users, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const packages = [
  {
    id: "entrance-guides",
    title: "Entrance & Guides",
    icon: Users,
    description: "Entry fees and guiding",
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
    description: "Daily 8AM – 6:30 PM",
    items: [
      { name: "1 Hour Ride", price: 5000 },
      { name: "40 Minutes", price: 4500 },
      { name: "30 Minutes", price: 3500 },
      { name: "20 Minutes", price: 2500 },
      { name: "15 Minutes", price: 2000 },
      { name: "10 Minutes", price: 1500 },
      { name: "5 Minutes", price: 1000 },
    ],
  },
  {
    id: "clothing-gear",
    title: "Clothing & Gear",
    icon: ShirtIcon,
    description: "Traditional attire",
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
    description: "Stay hydrated",
    items: [
      { name: "Dafu", price: 100 },
      { name: "Maji Ndogo", price: 50 },
      { name: "Maji Kubwa", price: 100 },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    icon: Camera,
    description: "Professional photos",
    items: [
      { name: "10 Edited Pictures", price: 2500 },
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="card-service overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header - Always visible */}
              <button
                onClick={() => toggleExpand(pkg.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <pkg.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-lg text-foreground">
                      {pkg.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>
                </div>
                {expandedId === pkg.id ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === pkg.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 space-y-2">
                  {pkg.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 px-3 rounded-lg bg-secondary/50"
                    >
                      <span className="font-body text-sm text-foreground">{item.name}</span>
                      <span className="font-display text-base text-primary whitespace-nowrap">
                        KES {item.price.toLocaleString()}
                        {item.unit && <span className="text-xs text-muted-foreground ml-1">/{item.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
