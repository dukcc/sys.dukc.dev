import Image from "next/image";

export default function Home() {
  return (
    <div className="p-12 w-full h-full flex flex-col gap-12 justify-center items-center">
      <h1 className="text-h1 font-bold text-wrap whitespace-break-spaces">
        sys.dukc.dev
      </h1>
      <p className="text-body text-center">
        A brutalist system file manager inspired UI holding all of my work,
        projects, organizations, and random things.
      </p>
    </div>
  );
}
