"use client";
import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/dashboard/Sidebar";
import { Topbar } from "@/components/layout/dashboard/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 px-4 py-10">{children}</main>
      </div>
    </div>
  );
}
