import { signOut } from "@/app/dashboard/actions";

export function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold transition hover:border-blue-300"
      >
        Выйти
      </button>
    </form>
  );
}
