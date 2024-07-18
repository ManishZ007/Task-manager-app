import { MenuIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/get-user";

export const Navbar = async () => {
  const nextCookies = cookies();

  const { user } = await getServerSideUser(nextCookies);

  return (
    <header className="fixed right-0 left-0 top-0 py-3 px-4 md:px-7 bg-black/50 backdrop:backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold cursor-pointer">
          fli<span className="text-orange-600">p</span>per
        </Link>
      </aside>
      {user && (
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center list-none gap-9">
            <li>
              <Link href="/current-tasks">Current Tasks</Link>
            </li>
            <li>
              <Link href="/achieved-tasks">Achieved Tasks</Link>
            </li>
            <li>
              <Link href="/pending-tasks">Pending Tasks</Link>
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
