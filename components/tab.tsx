import Link from "next/link";
import { useRouter } from "next/router";

export default function Tab() {
  const router = useRouter();
  return (
    <nav className="flex gap-8 text-2xl font-bold text-slate-300 [&>span]:hover:cursor-pointer">
      <Link href="/log-in">
        <span
          className={
            router.pathname === "/log-in"
              ? "text-black pb-1 border-b-4 border-[#1dadf2]"
              : "hover:text-slate-500"
          }
        >
          Login
        </span>
      </Link>
      <Link href="/create-account">
        <span
          className={
            router.pathname === "/create-account"
              ? "text-black pb-1 border-b-4 border-[#1dadf2]"
              : "hover:text-slate-500"
          }
        >
          Sign Up
        </span>
      </Link>
    </nav>
  );
}
