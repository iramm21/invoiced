// app/api/auth/register/route.ts

import { NextResponse } from "next/server";
import supabase from "@/lib/supabase-client";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password, name, business } = await req.json();

  // 1. Create the Supabase Auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 });
  }

  const userId = authData.user?.id;
  if (!userId) {
    return NextResponse.json(
      { error: "User creation failed." },
      { status: 500 },
    );
  }

  // 2. Create the UserProfile in your Postgres database
  try {
    await prisma.userProfile.create({
      data: {
        userId,
        name,
        business,
      },
    });

    return NextResponse.json({
      message: "User registered and profile created",
    });
  } catch (dbError) {
    console.error("DB Error:", dbError);
    return NextResponse.json(
      { error: "Failed to create user profile" },
      { status: 500 },
    );
  }
}
