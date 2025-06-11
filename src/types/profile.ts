// src/types/profile.ts

export type Profile = {
  id: string;
  user_id: string;
  business_name: string;
  business_email: string;
  business_address: string;
  business_phone: string;
  abn: string | null;
  created_at: string;
};
