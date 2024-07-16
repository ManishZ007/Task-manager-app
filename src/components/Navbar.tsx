"use client";

import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const user = false;

  return (
    <header className="fixed right-0 left-0 top-0 py-3 px-4 md:px-7 bg-black/50 backdrop:backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center justify-between">
        <p
          className="text-3xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          fli<span className="text-orange-600">p</span>per
        </p>
      </aside>
      {user && (
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center list-none gap-9">
            <li>
              <Link href="#">Achieved Tasks</Link>
            </li>
            <li>
              <Link href="#">Pending Task</Link>
            </li>
            <li>
              <Link href="#">Pending Task</Link>
            </li>
          </ul>
        </nav>
      )}

      <aside className="flex items-center gap-2">
        {user ? (
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Dashbord
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/log-in"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Log in
            </Link>

            <Link
              href="/sign-up"
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Sign up
            </Link>
          </div>
        )}
        {user && <MenuIcon className="md:hidden" />}
      </aside>
    </header>
  );
};
