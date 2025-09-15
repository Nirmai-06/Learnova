"use client";

import { Navbar } from "@/components/Navbar";
import FaceRecognizer from "@/components/FaceRecognizer";
import useLabels from "@/components/useLabels";

const AttendancePage = () => {
  const { labels, loading, error } = useLabels();

  // Loading state
  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-900">
        <Navbar />
        <div className="flex items-center justify-center mt-10">
          <span className="text-indigo-300 text-xl animate-pulse">
            Loading labels...
          </span>
        </div>
      </div>
    );

  // Error state
  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-900">
        <Navbar />
        <div className="flex items-center justify-center mt-10">
          <span className="text-red-500 text-xl">Error loading labels!</span>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-900">
      <Navbar />
      <FaceRecognizer labels={labels} />
    </div>
  );
};

export default AttendancePage;
