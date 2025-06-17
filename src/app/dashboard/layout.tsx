// app/dashboard/layout.tsx
import AuthGuard from "@/components/AuthGuard";
import Sidebar from "@/components/layout/private/Sidebar";
import Topbar from "@/components/layout/private/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6 dark:bg-gray-900">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}
