import { ReactNode } from "react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <PublicNavbar />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
