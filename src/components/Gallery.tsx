import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3998424/pexels-photo-3998424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Haircut",
      title: "Modern Short Cut"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Styling",
      title: "Gentleman's Style"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Beard",
      title: "Perfect Beard Trim"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2989169/pexels-photo-2989169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Haircut",
      title: "Classic Cut"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1684985/pexels-photo-1684985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Styling",
      title: "Textured Crop"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3998424/pexels-photo-3998424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Beard",
      title: "Full Beard Shape"
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">Check out some of our best work and popular styles</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <span className="text-sm text-yellow-400">{item.category}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#booking" className="btn btn-outline">
            Get Your New Style
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-sm text-yellow-400">{selectedImage.category}</span>
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
