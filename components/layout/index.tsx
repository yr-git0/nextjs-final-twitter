import SideMenu from "./sidemenu";
import SideContents from "./sidecontents";
import { User } from "@prisma/client";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen m-auto max-w-7xl min-w-max">
      <SideMenu />
      <main className="min-w-fit max-w-xl border-l-2 border-r-2 border-gray-100">
        {children}
      </main>
      <SideContents />
    </div>
  );
}
