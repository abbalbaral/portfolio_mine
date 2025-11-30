import Link from "next/link";
import { ArrowUpRight, Wallet, Layout, Bot, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Budget Tracker",
      category: "Interactive Demo",
      desc: "A React-based finance tracker utilizing State hooks for real-time calculation. Supports Income/Expense switching.",
      link: "/projects/budget-tracker", // Links to our internal page
      icon: <Wallet className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "My Portfolio",
      category: "Web Development",
      desc: "This exact website! Built with Next.js 16, Tailwind CSS v4, and Framer Motion for high-performance animations.",
      link: "/", // Links to Home
      icon: <Layout className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Text Summarizer",
      category: "Machine Learning",
      desc: "Abstractive text summarization using T5 Transformer model deployed with Streamlit. (86% BERTScore)",
      link: "https://github.com/abbalbaral", // Your GitHub profile
      icon: <Bot className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-12 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h1>
        <p className="text-slate-500 text-lg">
          A showcase of my web development and machine learning capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Link key={i} href={p.link} className="group relative block h-full">
            {/* Hover Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${p.color} rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
            
            <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden">
              
              <div>
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      {p.icon}
                    </div>
                    <div className="bg-slate-50 p-2 rounded-full group-hover:bg-slate-100 transition-colors">
                      <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-900" />
                    </div>
                </div>

                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{p.category}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="flex items-center text-sm font-bold text-slate-900 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {p.link.startsWith('/') ? 'View Live' : 'View Code'} <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}