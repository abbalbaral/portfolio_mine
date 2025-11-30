import BudgetTracker from "@/components/BudgetTracker";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BudgetTrackerPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Projects
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Personal Budget Tracker</h1>
          <p className="text-gray-600">A functional demo to track your finances.</p>
        </div>

        <BudgetTracker />
      </div>
    </div>
  );
}