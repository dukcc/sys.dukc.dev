"use client";

import { usePathname } from "next/navigation";

export default function TitleBar() {
  const currentPage = usePathname();
  return (
    <nav className="p-12 flex justify-between border-b border-white items-center">
      <div className="flex gap-12 items-center">
        <p className="text-body">sys.dukc.dev</p>
        <div className="size-4 bg-white/50"></div>
        <p className="text-body text-white/75">{currentPage}</p>
      </div>
    </nav>
  );
}
