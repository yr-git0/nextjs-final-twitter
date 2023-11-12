import { cls } from "../libs/client/utils";

interface MenuItemProps {
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function MenuItem({ isSelected, children }: MenuItemProps) {
  return (
    <div
      className={cls(
        isSelected ? "text-[#1DA1F2]" : "text-black",
        "flex gap-4 items-center cursor-pointer hover:text-[#1DA1F2]"
      )}
    >
      {children}
    </div>
  );
}
