import { UserButton } from "@clerk/nextJs";
import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/journal", label: "journal" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-48 top-0 left-0 h-full border-r border-r-black/10">
        <h2 className="capitalize text-3xl p-2">mood</h2>

        <ul>
          {links.map((link) => (
            <li key={link.href} className="p-4 text text-xl capitalize">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px]">
        <header className="h-16 border-b border-black/10">
          <div className="h-full w-full pr-6 flex items-center justify-end">
            {" "}
            <UserButton />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
