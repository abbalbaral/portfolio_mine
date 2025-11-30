import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center">
        
        <div className="flex gap-6">
            <a href="https://github.com/abbalbaral" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/abbal-baral-582812174/" target="_blank" className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin size={20}/></a>
            <a href="https://www.facebook.com/abbal.baral" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={20}/></a>
            <a href="mailto:baralabbal7@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={20}/></a>
        </div>

        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Abbal Baral. <br className="md:hidden"/> Designed in Pokhara, Nepal.
        </p>
      </div>
    </footer>
  );
}