import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=400&fit=crop", alt: "Sand dunes at sunset" },
  { id: 2, src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&h=400&fit=crop", alt: "Quad biking adventure" },
  { id: 3, src: "https://images.unsplash.com/photo-1507358522600-9f71e620c44e?w=600&h=400&fit=crop", alt: "Desert landscape" },
  { id: 4, src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop", alt: "Golden sand dunes" },
  { id: 5, src: "https://images.unsplash.com/photo-1517128446903-0f6ce788c265?w=600&h=400&fit=crop", alt: "Desert sunset" },
  { id: 6, src: "https://images.unsplash.com/photo-1548858806-e064cf7cd64a?w=600&h=400&fit=crop", alt: "Adventure in dunes" },
  { id: 7, src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=600&h=400&fit=crop", alt: "Desert panorama" },
  { id: 8, src: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?w=600&h=400&fit=crop", alt: "ATV riding in sand" },
  { id: 9, src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop", alt: "Dune silhouettes" },
  { id: 10, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop", alt: "Desert road adventure" },
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
