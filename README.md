This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details

# Premium Authentication System - App Router Version

A modern, role-based authentication system built with Next.js 13+ App Router, Firebase, and Tailwind CSS.

## 📁 App Router File Structure

```
src/
├── app/
│   ├── auth/
│   │   └── page.jsx              # Main authentication page
│   ├── verify/
│   │   └── page.jsx              # Email verification page (create as needed)
│   ├── profile/
│   │   └── page.jsx              # Profile setup page (create as needed)
│   ├── student/
│   │   └── dashboard/
│   │       └── page.jsx          # Student dashboard
│   ├── teacher/
│   │   └── dashboard/
│   │       └── page.jsx          # Teacher dashboard
│   ├── institute/
│   │   └── dashboard/
│   │       └── page.jsx          # Institute dashboard
│   ├── admin/
│   │   └── dashboard/
│   │       └── page.jsx          # Admin dashboard
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
│
├── components/
│   ├── AuthForm.jsx              # Main authentication form
│   ├── RoleSelection.jsx         # Role selection interface
│   ├── HeroSection.jsx           # Marketing/hero content
│   ├── ForgotPasswordModal.jsx   # Password reset modal
│   └── Navbar.jsx                # Navigation component
│
├── constants/
│   └── userRoles.js              # User roles and configurations
│
├── services/
│   └── authService.js            # Firebase authentication services
│
├── utils/
│   └── authUtils.js              # Authentication utility functions
│
├── hooks/
│   └── useAuth.js                # Custom authentication hook
│
└── lib/
    └── firebaseConfig.js         # Firebase configuration
```

## 🔄 Key Changes for App Router

### 1. **File Locations**
- **Before (Pages Router)**: `pages/auth.jsx`
- **After (App Router)**: `app/auth/page.jsx`

### 2. **Navigation Import**
```javascript
// App Router uses next/navigation instead of next/router
import { useRouter } from "next/navigation";
```

### 3. **Component Export**
```javascript
// App Router pages export default function
export default function AuthPage() {
  // Component logic
}
```

### 4. **Route Structure**
The routing in App Router is based on folder structure:
- `/auth` → `app/auth/page.jsx`
- `/verify` → `app/verify/page.jsx`
- `/student/dashboard` → `app/student/dashboard/page.jsx`

## 🚀 Setup Instructions for App Router

### 1. **Create the Required Pages**

**`app/verify/page.jsx`** (Email Verification):
```javascript
"use client";
export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Check Your Email</h1>
        <p>We've sent you a verification link.</p>
      </div>
    </div>
  );
}
```

**`app/profile/page.jsx`** (Profile Setup):
```javascript
"use client";
export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Complete Your Profile</h1>
        {/* Profile setup form */}
      </div>
    </div>
  );
}
```

**Dashboard Pages** (create as needed):
```javascript
// app/student/dashboard/page.jsx
"use client";
export default function StudentDashboard() {
  return <div>Student Dashboard</div>;
}

// app/teacher/dashboard/page.jsx
"use client";
export default function TeacherDashboard() {
  return <div>Teacher Dashboard</div>;
}

// app/institute/dashboard/page.jsx
"use client";
export default function InstituteDashboard() {
  return <div>Institute Dashboard</div>;
}

// app/admin/dashboard/page.jsx
"use client";
export default function AdminDashboard() {
  return <div>Admin Dashboard</div>;
}
```

### 2. **Root Layout** (`app/layout.jsx`)
```javascript
import './globals.css'

export const metadata = {
  title: 'Premium Auth System',
  description: 'Role-based authentication system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### 3. **Updated Auth Utils for App Router**

The `redirectBasedOnRole` function works the same way since we're using `router.push()` from `next/navigation`.

## 🔧 Implementation Steps

1. **Create the folder structure** as shown above
2. **Move/create files** in their respective App Router locations
3. **Update imports** to use `next/navigation`
4. **Create missing pages** (verify, profile, dashboards)
5. **Test the routing** to ensure all redirects work properly

## 📋 App Router Benefits

- **Faster navigation** with client-side routing
- **Better SEO** with server-side rendering support
- **Simplified routing** based on file system
- **Improved performance** with automatic code splitting
- **Better TypeScript support** (when using TypeScript)

## 🚨 Important Notes

1. **All interactive components** must use `"use client"` directive
2. **Server components** can be used for static content (like layouts)
3. **Metadata** is handled differently in App Router
4. **Error handling** and loading states work similarly
5. **Route groups** can be used with `(auth)` folders if needed

## 🔄 Migration Checklist

- [x] Move `pages/auth.jsx` to `app/auth/page.jsx`
- [x] Update imports from `next/router` to `next/navigation`
- [x] Add `"use client"` to interactive components
- [ ] Create missing dashboard pages
- [ ] Create verify and profile pages
- [ ] Update any API routes (if using)
- [ ] Test all authentication flows
- [ ] Test role-based redirections

This structure follows Next.js 13+ App Router conventions and provides better performance and developer experience!