
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

// Import all photos from the photos folder
import photo01 from '../assets/photos/01.webp';
import photo02 from '../assets/photos/02.webp';
import photo03 from '../assets/photos/03.webp';
import photo04 from '../assets/photos/04.webp';
import photo05 from '../assets/photos/05.webp';
import photo06 from '../assets/photos/06.webp';
import photo07 from '../assets/photos/07.webp';
import photo08 from '../assets/photos/08.webp';
import photo09 from '../assets/photos/09.webp';
import photo10 from '../assets/photos/10.webp';
import photo11 from '../assets/photos/11.webp';
import photo12 from '../assets/photos/12.webp';
import photo13 from '../assets/photos/13.webp';
import photo14 from '../assets/photos/14.webp';
import photo15 from '../assets/photos/15.webp';
import photo16 from '../assets/photos/16.webp';
import photo17 from '../assets/photos/17.webp';
import photo18 from '../assets/photos/18.webp';
import photo19 from '../assets/photos/19.webp';
import photo20 from '../assets/photos/20.webp';

const IMAGES = [
  { id: 1, src: photo01, title: 'Campus Life' },
  { id: 2, src: photo02, title: 'Campus Life' },
  { id: 3, src: photo03, title: 'Campus Life' },
  { id: 4, src: photo04, title: 'Campus Life' },
  { id: 5, src: photo05, title: 'Campus Life' },
  { id: 6, src: photo06, title: 'Campus Life' },
  { id: 7, src: photo07, title: 'Campus Life' },
  { id: 8, src: photo08, title: 'Campus Life' },
  { id: 9, src: photo09, title: 'Campus Life' },
  { id: 10, src: photo10, title: 'Campus Life' },
  { id: 11, src: photo11, title: 'Campus Life' },
  { id: 12, src: photo12, title: 'Campus Life' },
  { id: 13, src: photo13, title: 'Campus Life' },
  { id: 14, src: photo14, title: 'Campus Life' },
  { id: 15, src: photo15, title: 'Campus Life' },
  { id: 16, src: photo16, title: 'Campus Life' },
  { id: 17, src: photo17, title: 'Campus Life' },
  { id: 18, src: photo18, title: 'Campus Life' },
  { id: 19, src: photo19, title: 'Campus Life' },
  { id: 20, src: photo20, title: 'Campus Life' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-800 font-display">Campus Moments</h1>
        <p className="text-slate-500">A glimpse into the daily life and achievements of our students.</p>
      </div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {IMAGES.map((img) => (
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
                  <ZoomIn className="text-white" />
                </div>
                <p className="text-white font-800 text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {IMAGES.length === 0 && (
        <div className="py-24 text-center space-y-4">
          <ImageIcon className="mx-auto text-slate-200" size={64} />
          <p className="text-slate-400 font-bold">No images found.</p>
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
