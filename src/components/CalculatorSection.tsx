import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Minus, Plus } from "lucide-react";

interface CalculatorItem {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

const initialItems: CalculatorItem[] = [
  // Entrance & Guides
  { id: "entrance-res", name: "Entrance (Residence)", price: 300, category: "Entrance", quantity: 0 },
  { id: "entrance-non", name: "Entrance (Non-Residence)", price: 500, category: "Entrance", quantity: 0 },
  { id: "guiding", name: "Guiding Fees", price: 500, category: "Entrance", quantity: 0 },
  // Quad Biking
  { id: "quad-60", name: "Quad Bike - 1 Hour", price: 5000, category: "Quad Biking", quantity: 0 },
  { id: "quad-40", name: "Quad Bike - 40 Min", price: 4500, category: "Quad Biking", quantity: 0 },
  { id: "quad-30", name: "Quad Bike - 30 Min", price: 3500, category: "Quad Biking", quantity: 0 },
  { id: "quad-20", name: "Quad Bike - 20 Min", price: 2500, category: "Quad Biking", quantity: 0 },
  { id: "quad-15", name: "Quad Bike - 15 Min", price: 2000, category: "Quad Biking", quantity: 0 },
  { id: "quad-10", name: "Quad Bike - 10 Min", price: 1500, category: "Quad Biking", quantity: 0 },
  { id: "quad-5", name: "Quad Bike - 5 Min", price: 1000, category: "Quad Biking", quantity: 0 },
  // Clothing
  { id: "arafat-hire", name: "Arafat (Hire)", price: 200, category: "Clothing", quantity: 0 },
  { id: "arafat-buy", name: "Arafat (Buy)", price: 1000, category: "Clothing", quantity: 0 },
  { id: "buibui", name: "Buibui (Hire)", price: 300, category: "Clothing", quantity: 0 },
  { id: "kanzu", name: "Kanzu (Hire)", price: 300, category: "Clothing", quantity: 0 },
  { id: "shoes", name: "Shoes (Hire)", price: 100, category: "Clothing", quantity: 0 },
  { id: "glasses", name: "Sun Glasses (Buy)", price: 400, category: "Clothing", quantity: 0 },
  // Refreshments
  { id: "dafu", name: "Dafu", price: 100, category: "Refreshments", quantity: 0 },
  { id: "maji-small", name: "Maji Ndogo", price: 50, category: "Refreshments", quantity: 0 },
  { id: "maji-large", name: "Maji Kubwa", price: 100, category: "Refreshments", quantity: 0 },
  // Photography
  { id: "photos", name: "10 Edited Pictures", price: 2500, category: "Photography", quantity: 0 },
  // Special
  { id: "video-clips", name: "Artists Video Clips (Location + 5 Guides)", price: 10000, category: "Special", quantity: 0 },
];

const categories = ["Entrance", "Quad Biking", "Clothing", "Refreshments", "Photography", "Special"];

const CalculatorSection = () => {
  const [items, setItems] = useState<CalculatorItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState("Entrance");

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + delta) }
        : item
    ));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const selectedItems = items.filter(item => item.quantity > 0);

  const resetCalculator = () => {
    setItems(initialItems);
  };

  return (
    <section id="calculator" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            BUDGET CALCULATOR
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Plan your adventure budget by selecting the services you need
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left: Category Selection & Items */}
            <div className="md:col-span-2 space-y-4">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-card/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="bg-card rounded-xl p-4 shadow-card">
                <div className="space-y-3">
                  {items
                    .filter(item => item.category === activeCategory)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between py-3 px-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div>
                          <p className="font-body text-foreground">{item.name}</p>
                          <p className="font-display text-primary text-sm">
                            KES {item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-display text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="bg-card rounded-xl p-6 shadow-card h-fit sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">Your Budget</h3>
              </div>

              {selectedItems.length > 0 ? (
                <div className="space-y-3 mb-6">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium text-foreground">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm mb-6">
                  Select items to calculate your budget
                </p>
              )}

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">Total</span>
                  <span className="font-display text-3xl text-primary">
                    KES {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="adventure"
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/254103120054?text=Hello%20Coolkid%20Adventures,%20I%20would%20like%20to%20book%20the%20following%20services%20(Total:%20KES%20${total.toLocaleString()})`, "_blank")}
                >
                  BOOK NOW
                </Button>
                {selectedItems.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={resetCalculator}
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
