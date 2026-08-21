import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ZoomIn,
  Image as ImageIcon,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type MediaType = 'image' | 'video';

type GalleryMedia = {
  id: number;
  src: string;
  title: string;
  type: MediaType;
  filename: string;
  path: string;
};

/*
|--------------------------------------------------------------------------
| SUPPORTED FILE TYPES
|--------------------------------------------------------------------------
*/

const IMAGE_EXTENSIONS = new Set([
  'jpg',
  'jpeg',
  'png',
  'webp',
  'gif',
  'avif',
  'svg',
  'bmp',
]);

const VIDEO_EXTENSIONS = new Set([
  'mp4',
  'webm',
  'mov',
  'm4v',
  'ogv',
]);

/*
|--------------------------------------------------------------------------
| AUTOMATIC ASSET DISCOVERY
|--------------------------------------------------------------------------
|
| This scans EVERYTHING inside:
|
|   src/assets/
|
| including all subfolders.
|
| Examples:
|
|   assets/photos/photo.jpg
|   assets/photos/White-line Certificate.png
|   assets/gallery/PHOTO.JPG
|   assets/events/My Event Image.PNG
|   assets/videos/Campus Tour.MP4
|
| No manual imports are required.
|
*/

const assetFiles = import.meta.glob(
  '../assets/**/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>;

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

const getExtension = (path: string): string => {
  const fileName = path.split('/').pop() ?? '';

  const lastDot = fileName.lastIndexOf('.');

  if (lastDot === -1) {
    return '';
  }

  return fileName
    .substring(lastDot + 1)
    .toLowerCase();
};

const getFileName = (path: string): string => {
  const fileName = path.split('/').pop() ?? '';

  const lastDot = fileName.lastIndexOf('.');

  if (lastDot === -1) {
    return fileName;
  }

  return fileName.substring(0, lastDot);
};

/*
 * Converts filenames into readable gallery titles.
 *
 * Examples:
 *
 * White-line Certificate
 *     -> White Line Certificate
 *
 * annual_day_2026
 *     -> Annual Day 2026
 *
 * campus-tour
 *     -> Campus Tour
 */

const formatTitle = (filename: string): string => {
  return filename
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (character) =>
      character.toUpperCase()
    );
};

/*
|--------------------------------------------------------------------------
| BUILD GALLERY MEDIA
|--------------------------------------------------------------------------
*/

const IMAGES: GalleryMedia[] = Object.entries(assetFiles)
  .map(([path, src]) => {
    const extension = getExtension(path);

    if (IMAGE_EXTENSIONS.has(extension)) {
      return {
        src,
        path,
        filename: getFileName(path),
        title: formatTitle(getFileName(path)),
        type: 'image' as const,
      };
    }

    if (VIDEO_EXTENSIONS.has(extension)) {
      return {
        src,
        path,
        filename: getFileName(path),
        title: formatTitle(getFileName(path)),
        type: 'video' as const,
      };
    }

    return null;
  })
  .filter(
    (item): item is Omit<GalleryMedia, 'id'> =>
      item !== null
  )
  /*
   * Natural sorting:
   *
   * image1
   * image2
   * image10
   *
   * instead of:
   *
   * image1
   * image10
   * image2
   */
  .sort((a, b) =>
    a.filename.localeCompare(
      b.filename,
      undefined,
      {
        numeric: true,
        sensitivity: 'base',
      }
    )
  )
  .map((item, index) => ({
    ...item,
    id: index + 1,
  }));

/*
|--------------------------------------------------------------------------
| GALLERY COMPONENT
|--------------------------------------------------------------------------
*/

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null
      ? IMAGES[selectedIndex]
      : null;

  /*
  |--------------------------------------------------------------------------
  | KEYBOARD CONTROLS
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) {
        return;
      }

      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === 0
            ? IMAGES.length - 1
            : current - 1;
        });
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return current === IMAGES.length - 1
            ? 0
            : current + 1;
        });
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  /*
  |--------------------------------------------------------------------------
  | PREVENT BACKGROUND SCROLL WHEN LIGHTBOX IS OPEN
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [selectedIndex]);

  /*
  |--------------------------------------------------------------------------
  | MEDIA COUNT
  |--------------------------------------------------------------------------
  */

  const mediaCount = useMemo(
    () => IMAGES.length,
    []
  );

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION
  |--------------------------------------------------------------------------
  */

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? IMAGES.length - 1
        : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === IMAGES.length - 1
        ? 0
        : current + 1;
    });
  };

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <div className="py-40 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-800 font-display">
          Campus Moments
        </h1>

        <p className="text-slate-500">
          A glimpse into the daily life and achievements
          of our students.
        </p>
      </div>

      {/* GALLERY */}
      {mediaCount > 0 ? (
        <motion.div
          layout
          className="
            columns-1
            md:columns-2
            lg:columns-3
            gap-6
            space-y-6
          "
        >
          <AnimatePresence mode="popLayout">

            {IMAGES.map((media, index) => (
              <motion.div
                key={media.path}
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
                className="
                  relative
                  group
                  cursor-pointer
                  break-inside-avoid
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  bg-slate-100
                  mb-6
                "
                onClick={() =>
                  setSelectedIndex(index)
                }
              >

                {/* IMAGE */}
                {media.type === 'image' && (
                  <img
                    src={media.src}
                    alt={media.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      block
                      w-full
                      h-auto
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                    onError={(event) => {
                      /*
                       * Prevent broken images from
                       * displaying ugly browser icons.
                       */
                      event.currentTarget.style.display =
                        'none';
                    }}
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
                        block
                        w-full
                        h-auto
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* PLAY BUTTON */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        pointer-events-none
                      "
                    >
                      <div
                        className="
                          w-14
                          h-14
                          rounded-full
                          bg-black/60
                          backdrop-blur-sm
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Play
                          size={24}
                          className="text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* HOVER OVERLAY */}
                <div
                  className="
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
                  "
                >

                  <div
                    className="
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
                    "
                  >
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

                  <p
                    className="
                      text-white
                      font-800
                      text-xl
                      break-words
                    "
                  >
                    {media.title}
                  </p>

                </div>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>
      ) : (

        /* EMPTY STATE */
        <div
          className="
            py-24
            text-center
            space-y-4
          "
        >
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
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
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
            onClick={() =>
              setSelectedIndex(null)
            }
          >

            {/* CLOSE */}
            <button
              type="button"
              aria-label="Close gallery"
              className="
                absolute
                top-6
                right-6
                md:top-8
                md:right-8
                text-white
                p-2
                hover:bg-white/10
                rounded-full
                transition-colors
                z-20
              "
              onClick={() =>
                setSelectedIndex(null)
              }
            >
              <X size={40} />
            </button>

            {/* PREVIOUS */}
            {IMAGES.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  md:left-8
                  top-1/2
                  -translate-y-1/2
                  z-20
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  text-white
                  flex
                  items-center
                  justify-center
                  backdrop-blur-sm
                  transition-colors
                "
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
              >
                <ChevronLeft size={30} />
              </button>
            )}

            {/* NEXT */}
            {IMAGES.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  md:right-8
                  top-1/2
                  -translate-y-1/2
                  z-20
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  hover:bg-white/20
                  text-white
                  flex
                  items-center
                  justify-center
                  backdrop-blur-sm
                  transition-colors
                "
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
              >
                <ChevronRight size={30} />
              </button>
            )}

            {/* MEDIA */}
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
              className="
                max-w-5xl
                w-full
                max-h-[90vh]
                flex
                flex-col
                items-center
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              {/* IMAGE LIGHTBOX */}
              {selectedImage.type === 'image' && (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="
                    max-w-full
                    max-h-[78vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-3xl
                    shadow-2xl
                  "
                />
              )}

              {/* VIDEO LIGHTBOX */}
              {selectedImage.type === 'video' && (
                <video
                  key={selectedImage.src}
                  src={selectedImage.src}
                  controls
                  autoPlay
                  playsInline
                  className="
                    max-w-full
                    max-h-[78vh]
                    w-auto
                    h-auto
                    object-contain
                    rounded-3xl
                    shadow-2xl
                    bg-black
                  "
                />
              )}

              {/* CAPTION */}
              <div
                className="
                  mt-5
                  w-full
                  flex
                  justify-between
                  items-center
                  text-white
                  px-2
                "
              >
                <div>
                  <h3
                    className="
                      text-xl
                      md:text-2xl
                      font-800
                      font-display
                    "
                  >
                    {selectedImage.title}
                  </h3>

                  <p className="text-sm text-white/50 mt-1">
                    {selectedImage.type === 'video'
                      ? 'Video'
                      : 'Photo'}
                  </p>
                </div>

                <div
                  className="
                    text-sm
                    text-white/50
                    whitespace-nowrap
                  "
                >
                  {selectedIndex + 1} / {IMAGES.length}
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
