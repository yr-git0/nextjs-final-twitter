import useUser from "../../libs/client/useUser";
import SideContents from "./sidecontents";
import SideMenu from "./sidemenu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading || !user ? null : (
        <div className="flex h-screen m-auto max-w-7xl min-w-max">
          <SideMenu />
          <main className="w-[595px] min-w-fit max-w-xl border-l-2 border-r-2 border-gray-100">
            {children}
          </main>
          <SideContents />
        </div>
      )}
    </>
  );
}
