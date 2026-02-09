
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

const CATEGORIES = ['All', 'Campus', 'Sports', 'Classroom', 'Arts'] as const;

const IMAGES = [
  { id: 1, category: 'Campus', src: 'https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=800&auto=format&fit=crop', title: 'Main Campus' },
  { id: 2, category: 'Sports', src: 'https://images.unsplash.com/photo-1541534741688-6078c64b5cc5?q=80&w=800&auto=format&fit=crop', title: 'Athletics Meet' },
  { id: 3, category: 'Classroom', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', title: 'Innovation Lab' },
  { id: 4, category: 'Arts', src: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=800&auto=format&fit=crop', title: 'Arts Festival' },
  { id: 5, category: 'Campus', src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop', title: 'Modern Library' },
  { id: 6, category: 'Sports', src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop', title: 'Outdoor Sports' },
  { id: 7, category: 'Classroom', src: 'https://images.unsplash.com/photo-1564066391474-138334313f8d?q=80&w=800&auto=format&fit=crop', title: 'Science Lab' },
  { id: 8, category: 'Arts', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', title: 'Theater Production' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-800 font-display">Campus Moments</h1>
        <p className="text-slate-500">A glimpse into the daily life and achievements of our students.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
              activeCategory === cat 
              ? 'bg-primary text-secondary shadow-lg shadow-primary/20' 
              : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-xl"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img.src} alt={img.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <ZoomIn className="text-secondary" />
                </div>
                <p className="text-white font-800 text-xl">{img.title}</p>
                <p className="text-primary font-bold text-sm uppercase tracking-widest">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="py-24 text-center space-y-4">
          <ImageIcon className="mx-auto text-slate-200" size={64} />
          <p className="text-slate-400 font-bold">No images found for this category.</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary/95 p-6 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-2xl" />
              <div className="mt-6 flex justify-between items-center text-white">
                <div>
                  <h3 className="text-2xl font-800 font-display">{selectedImage.title}</h3>
                  <p className="text-primary font-bold">{selectedImage.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
