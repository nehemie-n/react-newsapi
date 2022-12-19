import { Children } from "react";

interface MenuItemProps {
  children: any;
  onClick: any;
}
export const MenuItem = ({ children, onClick }: MenuItemProps) => {
  return (
    <li onClick={onClick} className="cursor-pointer">
      <div className="block py-2 px-4  text-white  hover:bg-second-black ">
        {children}
      </div>
    </li>
  );
};
interface MenuProps {
  children: any;
}
export const Menu = ({ children }: MenuProps) => {
  return <ul className="py-1 text-sm ">{children}</ul>;
};

export const MenuDivider = ({ children }: MenuItemProps) => {
  return <div className="border-t-2 border-gray-600"></div>;
};
