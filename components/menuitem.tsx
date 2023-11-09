interface MenuItemProps {
  isSelected?: boolean;
  children: React.ReactNode;
}

export default function MenuItem({ children }: MenuItemProps) {
  return (
    <div className="text-black flex gap-4 items-center cursor-pointer hover:text-[#1DA1F2]">
      {children}
    </div>
  );
}
