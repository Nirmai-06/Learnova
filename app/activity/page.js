"use client";
import { Navbar } from "@/components/Navbar";
import Block from "@/components/Block";
import { useRouter } from "next/navigation";
import { Activity } from "lucide-react";

const ActivityPage = () => {
  const router = useRouter();

  const blocks = [
    {
      title: "User Management",
      description:
        "Manage user accounts, permissions, and access controls with comprehensive admin tools.",
      onButton1Click: () => {
        router.push("/");
      },
      onButton2Click: () => router.push("/register"),
      button1title: "View Users",
      button2title: "Add User",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Monitor system performance, user engagement, and key metrics in real-time.",
      onButton1Click: () => alert("Analytics - View Reports"),
      onButton2Click: () => alert("Analytics - Export Data"),
      button1title: "View Reports",
      button2title: "Export Data",
    },
    {
      title: "System Settings",
      description:
        "Configure application settings, security preferences, and system parameters.",
      onButton1Click: () => alert("Settings - Configure"),
      onButton2Click: () => alert("Settings - Backup"),
      button1title: "Configure",
      button2title: "Backup",
    },
    {
      title: "Team Collaboration",
      description:
        "Facilitate team communication, project management, and collaborative workflows.",
      onButton1Click: () => alert("Team - View Projects"),
      onButton2Click: () => alert("Team - Create Project"),
      button1title: "View Projects",
      button2title: "Create Project",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 to-slate-700">
      <Navbar />

      <div className="bg-gradient-to-br bg-slate-700 via-muted/30 to-accent/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Activity Dashboard
            </h1>
            <p className="text-xl dark:text-muted-foreground max-w-2xl mx-auto text-pretty">
              Manage your activities and workflows with our comprehensive suite
              of tools
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {blocks.map((block, i) => (
            <Block
              key={i}
              title={block.title}
              description={block.description}
              onButton1Click={block.onButton1Click}
              onButton2Click={block.onButton2Click}
              buttion1title={block.button1title}
              buttion2title={block.button2title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
