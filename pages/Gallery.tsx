
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

type GalleryImage = {
  id: number;
  src: string;
  title: string;
};

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

import img_001 from '../assets/photos/img_001.jpg';
import img_002 from '../assets/photos/img_002.jpg';
import img_003 from '../assets/photos/img_003.jpg';
import img_004 from '../assets/photos/img_004.jpg';
import img_005 from '../assets/photos/img_005.jpg';
import img_006 from '../assets/photos/img_006.jpg';
import img_007 from '../assets/photos/img_007.jpg';
import img_008 from '../assets/photos/img_008.jpg';
import img_009 from '../assets/photos/img_009.jpg';
import img_010 from '../assets/photos/img_010.jpg';
import img_011 from '../assets/photos/img_011.jpg';
import img_012 from '../assets/photos/img_012.jpg';
import img_013 from '../assets/photos/img_013.jpg';
import img_014 from '../assets/photos/img_014.jpg';
import img_015 from '../assets/photos/img_015.jpg';
import img_016 from '../assets/photos/img_016.jpg';
import img_017 from '../assets/photos/img_017.jpg';
import img_018 from '../assets/photos/img_018.jpg';
import img_019 from '../assets/photos/img_019.jpg';
import img_020 from '../assets/photos/img_020.jpg';
import img_021 from '../assets/photos/img_021.jpg';
import img_022 from '../assets/photos/img_022.jpg';
import img_023 from '../assets/photos/img_023.jpg';
import img_024 from '../assets/photos/img_024.jpg';
import img_025 from '../assets/photos/img_025.jpg';
import img_026 from '../assets/photos/img_026.jpg';
import img_027 from '../assets/photos/img_027.jpg';
import img_028 from '../assets/photos/img_028.jpg';
import img_029 from '../assets/photos/img_029.jpg';
import img_030 from '../assets/photos/img_030.jpg';
import img_031 from '../assets/photos/img_031.jpg';
import img_032 from '../assets/photos/img_032.jpg';
import img_033 from '../assets/photos/img_033.jpg';
import img_034 from '../assets/photos/img_034.jpg';
import img_035 from '../assets/photos/img_035.jpg';
import img_036 from '../assets/photos/img_036.jpg';
import img_037 from '../assets/photos/img_037.jpg';
import img_038 from '../assets/photos/img_038.jpg';
import img_039 from '../assets/photos/img_039.jpg';
import img_040 from '../assets/photos/img_040.jpg';
import img_041 from '../assets/photos/img_041.jpg';
import img_042 from '../assets/photos/img_042.jpg';
import img_043 from '../assets/photos/img_043.jpg';
import img_044 from '../assets/photos/img_044.jpg';
import img_045 from '../assets/photos/img_045.jpg';
import img_046 from '../assets/photos/img_046.jpg';
import img_047 from '../assets/photos/img_047.jpg';
import img_048 from '../assets/photos/img_048.jpg';
import img_049 from '../assets/photos/img_049.jpg';

const IMAGES: GalleryImage[] = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  img_001,
  img_002,
  img_003,
  img_004,
  img_005,
  img_006,
  img_007,
  img_008,
  img_009,
  img_010,
  img_011,
  img_012,
  img_013,
  img_014,
  img_015,
  img_016,
  img_017,
  img_018,
  img_019,
  img_020,
  img_021,
  img_022,
  img_023,
  img_024,
  img_025,
  img_026,
  img_027,
  img_028,
  img_029,
  img_030,
  img_031,
  img_032,
  img_033,
  img_034,
  img_035,
  img_036,
  img_037,
  img_038,
  img_039,
  img_040,
  img_041,
  img_042,
  img_043,
  img_044,
  img_045,
  img_046,
  img_047,
  img_048,
  img_049,
].map((src, index) => ({
  id: index + 1,
  src,
  title: 'Campus Life',
}));

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);

  return (
    <div className="py-40 px-6 max-w-7xl mx-auto">
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
