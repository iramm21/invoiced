"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { supabase } from "@/lib/supabase-browser";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText } from "lucide-react";
import { Profile } from "@/types/profile";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // For future: stats
  const [invoiceStats, setInvoiceStats] = useState({
    total: 0,
    outstanding: 0,
    clients: 0,
  });

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace("/auth/login");
      return;
    }
    async function fetchProfile() {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user!.id)
        .single();

      if (!data) {
        router.replace("/dashboard/profile");
      } else {
        setProfile(data as Profile);
        setLoadingProfile(false);
      }
    }
    fetchProfile();

    // Placeholder for future: load stats (example only)
    async function fetchStats() {
      // TODO: Fetch real counts from supabase!
      setInvoiceStats({
        total: 12,
        outstanding: 3,
        clients: 5,
      });
    }
    fetchStats();
  }, [user, loading, router]);

  if (loading || loadingProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-lg text-muted-foreground">
          Loading your dashboard...
        </span>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-lg text-muted-foreground">
          No profile found. Please set up your business profile.
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      {/* Dashboard Header & Quick Action */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-2">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-100 dark:text-gray-100 mb-1">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Welcome back, {profile.business_name || "User"}!
          </p>
        </div>
        <Button asChild className="font-semibold">
          <Link href="/invoices/new">+ New Invoice</Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="shadow rounded-xl bg-white/90 dark:bg-gray-900/90 border">
          <CardHeader className="flex flex-row items-center gap-2">
            <FileText className="text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-base font-semibold">
              Total Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invoiceStats.total}</div>
          </CardContent>
        </Card>
        <Card className="shadow rounded-xl bg-white/90 dark:bg-gray-900/90 border">
          <CardHeader className="flex flex-row items-center gap-2">
            <FileText className="text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-base font-semibold">
              Outstanding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invoiceStats.outstanding}</div>
          </CardContent>
        </Card>
        <Card className="shadow rounded-xl bg-white/90 dark:bg-gray-900/90 border">
          <CardHeader className="flex flex-row items-center gap-2">
            <Users className="text-green-600 dark:text-green-400" />
            <CardTitle className="text-base font-semibold">Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invoiceStats.clients}</div>
          </CardContent>
        </Card>
      </div>

      {/* Business Info */}
      <Card className="shadow rounded-2xl bg-white/90 dark:bg-gray-900/90 border max-w-2xl mb-10">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Business Profile</CardTitle>
          <CardDescription>
            Your current business details.{" "}
            <Link
              href="/dashboard/profile"
              className="underline hover:text-primary"
            >
              Edit profile
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <b>Email:</b> {profile.business_email || "-"}
          </div>
          <div>
            <b>Address:</b> {profile.business_address || "-"}
          </div>
          <div>
            <b>Phone:</b> {profile.business_phone || "-"}
          </div>
          <div>
            <b>ABN:</b> {profile.abn || "-"}
          </div>
        </CardContent>
      </Card>

      {/* Recent Invoices */}
      <Card className="shadow rounded-2xl bg-white/90 dark:bg-gray-900/90 border max-w-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Recent Invoices</CardTitle>
          <CardDescription>
            This section will show your most recent invoices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Replace with actual data table later */}
          <div className="text-muted-foreground text-sm">No invoices yet.</div>
        </CardContent>
      </Card>
    </div>
  );
}
