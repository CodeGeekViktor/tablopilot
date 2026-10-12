
import { redirect } from "next/navigation";
import { DashboardShell } from "./dashboard-shell";
import { SignOutButton } from "./sign-out-button";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Кабинет — TabloPilot",
};

function getDisplayName(claims: {
  email?: string;
  user_metadata?: {
    full_name?: string;
    name?: string;
  };
}) {
  return (
    claims.user_metadata?.full_name?.trim() ||
    claims.user_metadata?.name?.trim() ||
    claims.email ||
    "Пользователь"
  );
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const claims = data.claims as {
    email?: string;
    user_metadata?: {
      full_name?: string;
      name?: string;
    };
  };

  const displayName = getDisplayName(claims);
  const email = typeof claims.email === "string" ? claims.email : null;

  return (
    <DashboardShell displayName={displayName} email={email}>
      <SignOutButton />
    </DashboardShell>
  );
}
