// app/admin/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["institute"]}>
      <div>institute Dashboard Content</div>
    </ProtectedRoute>
  );
}
