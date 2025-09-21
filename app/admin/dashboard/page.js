// app/admin/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div>Admin Dashboard Content</div>
    </ProtectedRoute>
  );
}
