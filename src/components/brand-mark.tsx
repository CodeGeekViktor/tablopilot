import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
        T
      </span>
      <span className="text-xl font-bold tracking-tight text-[#172033]">
        Tablo<span className="text-blue-600">Pilot</span>
      </span>
    </Link>
  );
}
