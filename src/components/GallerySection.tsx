import { useState } from "react";
import { X } from "lucide-react";

import dunesSunset from "@/assets/gallery/dunes-sunset.jpg";
import quadAction from "@/assets/gallery/quad-action.jpg";
import dunesPanorama from "@/assets/gallery/dunes-panorama.jpg";
import duneSilhouette from "@/assets/gallery/dune-silhouette.jpg";
import quadParked from "@/assets/gallery/quad-parked.jpg";
import dunesSunrise from "@/assets/gallery/dunes-sunrise.jpg";
import quadGroup from "@/assets/gallery/quad-group.jpg";
import duneFootprints from "@/assets/gallery/dune-footprints.jpg";
import desertSunset from "@/assets/gallery/desert-sunset.jpg";
import quadJump from "@/assets/gallery/quad-jump.jpg";

const galleryImages = [
  { id: 1, src: dunesSunset, alt: "Golden sand dunes at sunset" },
  { id: 2, src: quadAction, alt: "Quad biking adventure" },
  { id: 3, src: dunesPanorama, alt: "Desert sand dunes panorama" },
  { id: 4, src: duneSilhouette, alt: "Silhouette on sand dune" },
  { id: 5, src: quadParked, alt: "Red quad bike on dunes" },
  { id: 6, src: dunesSunrise, alt: "Sunrise over sand dunes" },
  { id: 7, src: quadGroup, alt: "Group quad biking expedition" },
  { id: 8, src: duneFootprints, alt: "Footprints on sand dunes" },
  { id: 9, src: desertSunset, alt: "Dramatic desert sunset" },
  { id: 10, src: quadJump, alt: "Quad bike jumping dune" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            ADVENTURE GALLERY
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Explore the breathtaking views of our sand dune adventures
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group animate-fade-in aspect-square"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="font-display text-lg text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
