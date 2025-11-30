"use client";
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryGrid({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* MASONRY LAYOUT (Pinterest Style) */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-2">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="break-inside-avoid relative group cursor-zoom-in rounded-xl overflow-hidden mb-4"
            onClick={() => setSelectedImage(img)}
          >
            {/* 
               Using standard <img> tag ensures the image loads in its 
               NATURAL aspect ratio. No cropping. No forcing square.
            */}
            <img
              src={`/gallery/${img}`}
              alt="Gallery Moment"
              className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
               <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-slate-900">
                 <ZoomIn size={20} />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX (The "Openable" Part) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]">
              <X size={32} />
            </button>
            
            {/* The Full Image */}
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={`/gallery/${selectedImage}`}
              alt="Full Screen View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing if clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}