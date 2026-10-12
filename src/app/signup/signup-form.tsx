"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  AuthShell,
  authButtonClassName,
  authInputClassName,
} from "@/components/auth/auth-shell";
import { authPageMessages, getAuthErrorMessage } from "@/lib/auth/messages";
import { createClient } from "@/lib/supabase/client";

export function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setPending(true);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setError("Укажите имя — не меньше двух символов.");
      setPending(false);
      return;
    }

    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: trimmedEmail,
      password,
      options: {
        data: {
          full_name: trimmedName,
          name: trimmedName,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    if (signUpError) {
      setError(getAuthErrorMessage(signUpError));
      setPending(false);
      return;
    }

    if (data.session) {
      router.replace("/dashboard");
      router.refresh();
      return;
    }

    setSuccess(authPageMessages.signupSuccess);
    setPending(false);
  }

  return (
    <AuthShell
      title="Регистрация"
      description="Создайте аккаунт, чтобы открыть рабочее пространство TabloPilot."
      footer={
        <>
          Уже есть аккаунт?{" "}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Войти
          </Link>
        </>
      }
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium">
          Имя
          <input
            required
            type="text"
            autoComplete="name"
            minLength={2}
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={authInputClassName}
            placeholder="Как к вам обращаться"
          />
        </label>

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
            autoComplete="new-password"
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={authInputClassName}
            placeholder="Не менее 6 символов"
          />
        </label>

        {error ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {success ? (
          <p className="rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {success}
          </p>
        ) : null}

        <button type="submit" disabled={pending} className={authButtonClassName}>
          {pending ? "Создаём аккаунт..." : "Зарегистрироваться"}
        </button>
      </form>
    </AuthShell>
  );
}
