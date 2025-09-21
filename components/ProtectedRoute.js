"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";

export default function ProtectedRoute({
  children,
  allowedRoles = [],
  requireEmailVerification = true,
}) {
  const { user, userProfile, loading, isAuthenticated, hasProfile } =
    useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Wait for auth state to load

    // Redirect to auth if not authenticated
    if (!isAuthenticated) {
      router.push("/auth");
      return;
    }

    // Redirect to verify if email not verified and required
    if (requireEmailVerification && user && !user.emailVerified) {
      router.push("/verify");
      return;
    }

    // Redirect to profile if no user profile exists
    if (isAuthenticated && !hasProfile) {
      router.push("/profile");
      return;
    }

    // Check role permissions
    if (
      allowedRoles.length > 0 &&
      userProfile &&
      !allowedRoles.includes(userProfile.role)
    ) {
      // Redirect to appropriate dashboard based on user's role
      switch (userProfile.role) {
        case "student":
          router.push("/student/dashboard");
          break;
        case "teacher":
          router.push("/teacher/dashboard");
          break;
        case "institute":
          router.push("/institute/dashboard");
          break;
        case "admin":
          router.push("/admin/dashboard");
          break;
        default:
          router.push("/auth");
      }
      return;
    }
  }, [
    user,
    userProfile,
    loading,
    isAuthenticated,
    hasProfile,
    router,
    allowedRoles,
    requireEmailVerification,
  ]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!isAuthenticated || !hasProfile) {
    return null;
  }

  // Check email verification
  if (requireEmailVerification && user && !user.emailVerified) {
    return null;
  }

  // Check role permissions
  if (
    allowedRoles.length > 0 &&
    userProfile &&
    !allowedRoles.includes(userProfile.role)
  ) {
    return null;
  }

  return children;
}
