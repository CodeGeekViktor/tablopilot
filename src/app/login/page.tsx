import { Suspense } from "react";
import { LoginForm } from "@/app/login/login-form";

export const metadata = {
  title: "Вход — TabloPilot",
};

function LoginFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fc] text-slate-500">
      Загрузка...
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginForm />
    </Suspense>
  );
}
