"use client";
import { Profile } from "@/types/profile";
import { Button } from "@/components/ui/button";

type Props = {
  profile: Profile;
  onEdit: () => void;
};

export function ProfileView({ profile, onEdit }: Props) {
  return (
    <div className="space-y-4">
      <div>
        <b>Business Name:</b> {profile.business_name}
      </div>
      <div>
        <b>Business Email:</b> {profile.business_email}
      </div>
      <div>
        <b>Business Address:</b> {profile.business_address}
      </div>
      <div>
        <b>Business Phone:</b> {profile.business_phone}
      </div>
      <div>
        <b>ABN:</b> {profile.abn || "-"}
      </div>
      <Button className="mt-2" onClick={onEdit}>
        Edit Profile
      </Button>
    </div>
  );
}
