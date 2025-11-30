"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Layers, Image as ImageIcon } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: Layers },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-2 p-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-900/5">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          const Icon = link.icon;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2
                ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} /> {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}