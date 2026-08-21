import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon, Play } from 'lucide-react';

type MediaType = 'image' | 'video';

type GalleryMedia = {
  id: number;
  src: string;
  title: string;
  type: MediaType;
  filename: string;
};

/*
 * Automatically fetch ALL images and videos from the assets folder.
 *
 * You can put files anywhere inside:
 * src/assets/
 *
 * For example:
 * src/assets/photos/01.webp
 * src/assets/photos/02.jpg
 * src/assets/photos/new-photo.png
 * src/assets/videos/campus-tour.mp4
 * src/assets/videos/event.mp4
 *
 * No manual imports are required.
 */

const imageFiles = import.meta.glob(
  '../assets/**/*.{jpg,jpeg,png,webp,gif,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

const videoFiles = import.meta.glob(
  '../assets/**/*.{mp4,webm,mov,ogg,m4v}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

const getFileName = (path: string) => {
  const fileName = path.split('/').pop() || '';
  return fileName.replace(/\.[^/.]+$/, '');
};

const formatTitle = (filename: string) => {
  return filename
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const IMAGES: GalleryMedia[] = [
  ...Object.entries(imageFiles).map(([path, src]) => ({
    src,
    filename: getFileName(path),
    type: 'image' as const,
  })),

  ...Object.entries(videoFiles).map(([path, src]) => ({
    src,
    filename: getFileName(path),
    type: 'video' as const,
  })),
]
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, {
    numeric: true,
    sensitivity: 'base',
  }))
  .map((item, index) => ({
    id: index + 1,
    src: item.src,
    title: formatTitle(item.filename),
    type: item.type,
    filename: item.filename,
  }));

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] =
    useState<GalleryMedia | null>(null);

  const mediaCount = useMemo(() => IMAGES.length, []);

  return (
    <div className="py-40 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-800 font-display">
          Campus Moments
        </h1>

        <p className="text-slate-500">
          A glimpse into the daily life and achievements of our students.
        </p>
      </div>

      {/* Gallery */}
      {mediaCount > 0 ? (
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">

            {IMAGES.map((media) => (
              <motion.div
                key={media.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-slate-100"
                onClick={() => setSelectedImage(media)}
              >

                {/* IMAGE */}
                {media.type === 'image' && (
                  <img
                    src={media.src}
                    alt={media.title}
                    loading="lazy"
                    className="
                      w-full
                      h-auto
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                )}

                {/* VIDEO */}
                {media.type === 'video' && (
                  <div className="relative">
                    <video
                      src={media.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="
                        w-full
                        h-auto
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Video play icon */}
                    <div className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      pointer-events-none
                    ">
                      <div className="
                        w-14
                        h-14
                        rounded-full
                        bg-black/60
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                      ">
                        <Play
                          size={25}
                          className="text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-secondary/60
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  flex
                  flex-col
                  items-center
                  justify-center
                  p-8
                  text-center
                ">

                  <div className="
                    w-12
                    h-12
                    bg-primary
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-4
                    transform
                    translate-y-4
                    group-hover:translate-y-0
                    transition-transform
                  ">
                    {media.type === 'video' ? (
                      <Play
                        className="text-white ml-0.5"
                        size={22}
                        fill="white"
                      />
                    ) : (
                      <ZoomIn
                        className="text-white"
                        size={24}
                      />
                    )}
                  </div>

                  <p className="
                    text-white
                    font-800
                    text-xl
                  ">
                    {media.title}
                  </p>

                </div>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="py-24 text-center space-y-4">
          <ImageIcon
            className="mx-auto text-slate-200"
            size={64}
          />

          <p className="text-slate-400 font-bold">
            No images or videos found.
          </p>
        </div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-secondary/95
              p-6
              backdrop-blur-xl
            "
            onClick={() => setSelectedImage(null)}
          >

            {/* Close button */}
            <button
              type="button"
              aria-label="Close gallery"
              className="
                absolute
                top-8
                right-8
                text-white
                p-2
                hover:bg-white/10
                rounded-full
                transition-colors
                z-10
              "
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            {/* Media container */}
            <motion.div
              initial={{
                scale: 0.9,
                y: 20,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Selected image */}
              {selectedImage.type === 'image' && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="
                    w-full
                    h-auto
                    max-h-[80vh]
                    object-contain
                    rounded-3xl
                    shadow-2xl
                  "
                />
              )}

              {/* Selected video */}
              {selectedImage.type === 'video' && (
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  playsInline
                  className="
                    w-full
                    max-h-[80vh]
                    object-contain
                    rounded-3xl
                    shadow-2xl
                    bg-black
                  "
                />
              )}

              {/* Caption */}
              <div className="
                mt-6
                flex
                justify-between
                items-center
                text-white
              ">
                <div>
                  <h3 className="
                    text-2xl
                    font-800
                    font-display
                  ">
                    {selectedImage.title}
                  </h3>
                </div>

                <div className="
                  text-sm
                  text-white/60
                ">
                  {selectedImage.type === 'video'
                    ? 'Video'
                    : 'Photo'}
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
