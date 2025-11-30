"use client";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowUpRight, Facebook, GraduationCap, Code2, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4"
        >
          
          {/* 1. HERO / INTRO */}
          <motion.div variants={item} className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 border border-white/60 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Code2 size={120} />
             </div>
             
             <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wider mb-6 border border-green-200">
                 <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                 OPEN TO WORK
               </div>
               
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                 I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Abbal Baral.</span>
               </h1>
               
               <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                 Computer Engineering Student at <span className="font-semibold text-slate-900">Kathmandu University</span>. 
                 <br/>
                 I translate strong architectural and system logic principles into clean, modern web applications.
               </p>
             </div>

             <div className="flex gap-3 mt-8 relative z-10">
               <a href="/AbbalBaral_Resume_for_Internship.pdf" target="_blank" className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-transform active:scale-95 shadow-lg shadow-slate-900/20">
                 <Download size={18} /> Resume
               </a>
               <Link href="/projects" className="flex-1 bg-white border-2 border-slate-100 text-slate-900 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-slate-300 transition-colors active:scale-95">
                 My Work <ArrowUpRight size={18} />
               </Link>
             </div>
          </motion.div>

          {/* 2. PROFILE PHOTO (Fixes alignment) */}
          <motion.div variants={item} className="md:col-span-1 md:row-span-2 relative min-h-[300px] rounded-3xl overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50">
             {/* Use object-top to keep head visible */}
             <Image 
                src="/gallery/GorkhaSmile.jpeg" 
                alt="Profile" 
                fill 
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">Pokhara, Nepal</p>
                  <p className="text-xs opacity-80">Based in Masbar</p>
                </div>
             </div>
          </motion.div>

          {/* 3. EDUCATION STATS */}
          <motion.div variants={item} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center gap-2 group hover:border-blue-200 transition-colors">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
               <GraduationCap size={24} />
             </div>
             <h3 className="text-3xl font-bold text-slate-900">3.80</h3>
             <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Current CGPA</p>
             <p className="text-slate-400 text-[10px]">Kathmandu University</p>
          </motion.div>

          {/* 4. TECH SCROLLER (Faster & Accurate) */}
          <motion.div variants={item} className="md:col-span-2 bg-slate-900 rounded-3xl p-6 flex flex-col justify-center overflow-hidden relative shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10 pointer-events-none" />
             <h3 className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 z-20 flex items-center gap-2">
               <Cpu size={14} /> Technical Arsenal
             </h3>
             <div className="flex gap-8 animate-scroll whitespace-nowrap opacity-90 items-center">
                {/* Accurate Stack from Resume */}
                {['C++', 'Python', 'React', 'Next.js', 'Django', 'Flutter', 'Logisim', 'Git', 'OOP', 'DSA', 'C++', 'Python', 'React', 'Next.js'].map((tech, i) => (
                  <span key={i} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
             </div>
          </motion.div>

          {/* 5. SOCIALS */}
          <motion.div variants={item} className="md:col-span-1 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-indigo-500/20">
             <div>
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1">Contact</p>
                <h3 className="text-xl font-bold">Find me on</h3>
             </div>
             <div className="flex gap-3 mt-4">
                 <a href="https://github.com/abbalbaral" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-colors"><Github size={20}/></a>
                 <a href="https://www.linkedin.com/in/abbal-baral-582812174/" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-colors"><Linkedin size={20}/></a>
                 <a href="https://www.facebook.com/abbal.baral" target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-colors"><Facebook size={20}/></a>
                 <a href="mailto:baralabbal7@gmail.com" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-colors"><Mail size={20}/></a>
             </div>
          </motion.div>

           {/* 6. INTERESTS */}
           <motion.div variants={item} className="md:col-span-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-center">
             <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">Interests</h3>
             <div className="flex flex-wrap gap-2">
               {['Cricket 🏏', 'Hiking 🏔️', 'Photo 📸', 'AI 🤖'].map((tag, i) => (
                 <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default border border-slate-100">
                   {tag}
                 </span>
               ))}
             </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}