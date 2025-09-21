// app/student/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function StudentDashboard() {
  return (
    <ProtectedRoute allowedRoles={["student"]}>
      <div>Student Dashboard Content</div>
    </ProtectedRoute>
  );
}
