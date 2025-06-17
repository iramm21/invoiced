export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      userProfile: {
        Row: {
          id: string;
          userId: string;
          name: string | null;
          business: string | null;
          createdAt: string;
        };
        Insert: {
          id?: string;
          userId: string;
          name?: string | null;
          business?: string | null;
          createdAt?: string;
        };
        Update: {
          name?: string | null;
          business?: string | null;
        };
      };
      client: {
        Row: {
          id: string;
          userId: string;
          name: string;
          email: string;
          phone: string | null;
          address: string | null;
          createdAt: string;
        };
        Insert: {
          id?: string;
          userId: string;
          name: string;
          email: string;
          phone?: string | null;
          address?: string | null;
          createdAt?: string;
        };
        Update: {
          name?: string;
          email?: string;
          phone?: string | null;
          address?: string | null;
        };
      };
      invoice: {
        Row: {
          id: string;
          userId: string;
          clientId: string;
          invoiceNumber: string;
          issueDate: string;
          dueDate: string;
          status: "DRAFT" | "SENT" | "PAID" | "OVERDUE";
          notes: string | null;
          createdAt: string;
        };
        Insert: {
          id?: string;
          userId: string;
          clientId: string;
          invoiceNumber: string;
          issueDate: string;
          dueDate: string;
          status?: "DRAFT" | "SENT" | "PAID" | "OVERDUE";
          notes?: string | null;
          createdAt?: string;
        };
        Update: {
          status?: "DRAFT" | "SENT" | "PAID" | "OVERDUE";
          notes?: string | null;
        };
      };
    };
    Views: Record<string, unknown>;
    Functions: Record<string, unknown>;

    Enums: {
      InvoiceStatus: "DRAFT" | "SENT" | "PAID" | "OVERDUE";
    };
  };
};
