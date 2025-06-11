"use client";
import { useState } from "react";
import { Profile } from "@/types/profile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ProfileFormData = Omit<Profile, "id" | "user_id" | "created_at">;

type Props = {
  onSubmit: (data: ProfileFormData) => Promise<void>;
  submitting: boolean;
  error?: string | null;
};

export function ProfileCreateForm({ onSubmit, submitting, error }: Props) {
  const [form, setForm] = useState<ProfileFormData>({
    business_name: "",
    business_email: "",
    business_address: "",
    business_phone: "",
    abn: "",
  });

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      autoComplete="off"
    >
      <Input
        placeholder="Business Name"
        value={form.business_name}
        onChange={(e) => setForm({ ...form, business_name: e.target.value })}
        required
      />
      <Input
        placeholder="Business Email"
        type="email"
        value={form.business_email}
        onChange={(e) => setForm({ ...form, business_email: e.target.value })}
        required
      />
      <Input
        placeholder="Business Address"
        value={form.business_address}
        onChange={(e) => setForm({ ...form, business_address: e.target.value })}
        required
      />
      <Input
        placeholder="Business Phone"
        value={form.business_phone}
        onChange={(e) => setForm({ ...form, business_phone: e.target.value })}
        required
      />
      <Input
        placeholder="ABN (optional)"
        value={form.abn ?? ""}
        onChange={(e) => setForm({ ...form, abn: e.target.value })}
      />
      <Button type="submit" className="w-full mt-2" disabled={submitting}>
        {submitting ? "Saving..." : "Save and Continue"}
      </Button>
      {error && (
        <div className="text-sm text-center mt-3 text-red-500">{error}</div>
      )}
    </form>
  );
}
