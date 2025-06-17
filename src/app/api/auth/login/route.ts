import { NextResponse } from "next/server";
import supabase from "@/lib/supabase-client";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  return NextResponse.json({
    message: "Login successful",
    user: data.user,
    session: data.session,
  });
}
