import fs from 'fs';
import path from 'path';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  // 1. Locate the folder
  const galleryDir = path.join(process.cwd(), 'public/gallery');
  
  // 2. Read files (if folder exists)
  let files: string[] = [];
  try {
    if (fs.existsSync(galleryDir)) {
      files = fs.readdirSync(galleryDir).filter(file => 
        /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file)
      );
    }
  } catch (error) {
    console.error("Error reading gallery folder:", error);
  }

  return (
    <main className="min-h-screen pt-32 pb-12 px-4 sm:px-6 max-w-[1600px] mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Gallery</h1>
        <p className="text-slate-500 max-w-xl mx-auto text-lg">
          A collection of moments, uncut and uncropped.
        </p>
      </div>

      {/* The Grid Component */}
      {files.length > 0 ? (
        <GalleryGrid images={files} />
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
           <p className="text-slate-400">No images found in <code className="bg-slate-200 px-1 rounded">public/gallery</code></p>
        </div>
      )}
    </main>
  );
}