import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { USER_ROLES } from "@/constants/userRoles";

export const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/user-not-found":
      return "No account found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    default:
      return null;
  }
};

export const createUserProfile = async (user, role, additionalData = {}) => {
  const { fullName, instituteName } = additionalData;

  if (!fullName?.trim()) {
    throw new Error("Full name is required");
  }

  const userProfile = {
    uid: user.uid,
    email: user.email,
    fullName: fullName.trim(),
    role,
    createdAt: new Date(),
    emailVerified: user.emailVerified,
    lastLogin: new Date(),
  };

  if (role === USER_ROLES.INSTITUTE) {
    if (!instituteName?.trim()) {
      throw new Error("Institute name is required");
    }
    userProfile.instituteName = instituteName.trim();
  }

  await setDoc(doc(db, "users", user.uid), userProfile);
  return userProfile;
};

export const validateForm = (formData, isLogin) => {
  const { selectedRole, email, password, fullName, instituteName } = formData;
  const errors = {};

  // Role is always required
  if (!selectedRole) {
    errors.role = "Please select your role";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!isLogin && password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!isLogin) {
    if (!fullName?.trim()) {
      errors.fullName = "Full name is required";
    }

    if (selectedRole === USER_ROLES.INSTITUTE && !instituteName?.trim()) {
      errors.instituteName = "Institute name is required";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const redirectBasedOnRole = (role, router) => {
  try {
    switch (role) {
      case USER_ROLES.STUDENT:
        router.push("/student/dashboard");
        break;
      case USER_ROLES.TEACHER:
        router.push("/teacher/dashboard");
        break;
      case USER_ROLES.INSTITUTE:
        router.push("/institute/dashboard");
        break;
      case USER_ROLES.ADMIN:
        router.push("/admin/dashboard");
        break;
      default:
        router.push("/profile");
    }
  } catch (err) {
    console.error("Navigation error:", err);
    throw new Error("Navigation failed. Please try refreshing the page.");
  }
};
