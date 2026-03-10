"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, routing } from "@/routing";
import { Globe } from "lucide-react";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--color-muted)] group">
      <Globe className={`w-3.5 h-3.5 ${isPending ? 'animate-spin' : ''}`} />
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="bg-transparent uppercase appearance-none cursor-pointer focus:outline-none hover:text-[var(--color-accent)] transition-colors pr-4"
      >
        {routing.locales.map((cur) => (
          <option key={cur} value={cur} className="bg-[var(--color-primary)] text-white">
            {cur}
          </option>
        ))}
      </select>
      <div className="absolute right-0 pointer-events-none">
        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
}
