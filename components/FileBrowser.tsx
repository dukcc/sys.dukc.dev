"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FileBrowser() {
  const isCurrentPage = (path: string) => usePathname() === path;
  return (
    <nav className="border-r border-white p-12 flex flex-col gap-12 h-full w-fit">
      <Link href={""} className={`flex gap-6 hover:animate-flashColor`}>
        <span className="material-symbols-outlined">folder</span>
        <p className="text-body">app</p>
      </Link>
      <Link
        href={"/"}
        className={`ml-24 flex gap-6 hover:animate-flashColor ${
          isCurrentPage("/") ? "text-cyan" : ""
        }`}
      >
        <span className="material-symbols-outlined">draft</span>
        <p className="text-body">index</p>
      </Link>
      <Link
        href={"/about"}
        className={`ml-24 flex gap-6 hover:animate-flashColor ${
          isCurrentPage("/about") ? "text-cyan" : ""
        }`}
      >
        <span className="material-symbols-outlined">draft</span>
        <p className="text-body">about</p>
      </Link>
    </nav>
  );
}
