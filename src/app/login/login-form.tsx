"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import {
  AuthShell,
  authButtonClassName,
  authInputClassName,
} from "@/components/auth/auth-shell";
import { authPageMessages, getAuthErrorMessage } from "@/lib/auth/messages";
import { getSafeRedirectPath } from "@/lib/auth/paths";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const infoMessage = useMemo(() => {
    if (searchParams.get("error") === "confirm") {
      return authPageMessages.confirmFailed;
    }

    if (searchParams.get("confirmed") === "1") {
      return authPageMessages.confirmSuccess;
    }

    return null;
  }, [searchParams]);

  const isErrorBanner = searchParams.get("error") === "confirm";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError(getAuthErrorMessage(signInError));
      setPending(false);
      return;
    }

    router.replace(getSafeRedirectPath(searchParams.get("next")));
    router.refresh();
  }

  return (
    <AuthShell
      title="Вход"
      description="Продолжите работу в личном пространстве TabloPilot."
      footer={
        <>
          Нет аккаунта?{" "}
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
            Зарегистрироваться
          </Link>
        </>
      }
    >
      {infoMessage ? (
        <div
          className={`mb-6 rounded-xl px-4 py-3 text-sm ${
            isErrorBanner
              ? "bg-red-50 text-red-700"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          {infoMessage}
        </div>
      ) : null}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium">
          Email
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={authInputClassName}
            placeholder="you@email.com"
          />
        </label>

        <label className="block text-sm font-medium">
          Пароль
          <input
            required
            type="password"
            autoComplete="current-password"
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={authInputClassName}
            placeholder="Введите пароль"
          />
        </label>

        {error ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <button type="submit" disabled={pending} className={authButtonClassName}>
          {pending ? "Входим..." : "Войти"}
        </button>
      </form>
    </AuthShell>
  );
}
