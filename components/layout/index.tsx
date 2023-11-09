import SideMenu from "./sidemenu";
import SideContents from "./sidecontents";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="flex-1 border-l-2 border-r-2 border-gray-100 px-3 pt-2">
        {children}
      </main>
      <SideContents />
    </div>
  );
}
