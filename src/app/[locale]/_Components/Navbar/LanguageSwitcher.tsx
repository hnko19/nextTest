"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang: string) => {
    const newPath = `/${lang}${pathname.substring(3)}`;
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => switchLanguage("en")} className="px-3 py-2 bg-blue-600 text-white rounded-lg">🇺🇸 English</button>
      <button onClick={() => switchLanguage("ar")} className="px-3 py-2 bg-green-600 text-white rounded-lg">🇸🇦 العربية</button>
    </div>
  );
}
