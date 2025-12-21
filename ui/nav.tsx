import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed left-6 top-5 hover:cursor-pointer z-50">
      <Link href="/" className="font-title-bebas text-3xl ">
        3D Playground
      </Link>
    </div>
  );
}
