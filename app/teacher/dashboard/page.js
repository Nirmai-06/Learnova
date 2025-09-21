// app/admin/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["teacher"]}>
      <div>Teacher Dashboard Content</div>
    </ProtectedRoute>
  );
}
