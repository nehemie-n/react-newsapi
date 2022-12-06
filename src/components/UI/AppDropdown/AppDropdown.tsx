import classNames from "classnames";
import { useState } from "react";
import "./AppDropdown.scss";

interface AppDropdownProps {
  target?: any;
  menu?: any;
  trigger?: "click" | "hover";
}
export const AppDropdown = ({
  trigger = "click",
  menu,
  target,
}: AppDropdownProps) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const hide = () => {
    setShow(false);
  };

  const menuClasses = classNames({
    AppDropdown_Menu: true,
    AppDropdown_Menu_hidden: !show,
  });

  return (
    <div className="AppDropdown">
      {/* Trigger */}
      <span onClick={toggle}>{target}</span>
      {/* Menu */}
      <div onMouseLeave={hide} className={menuClasses}>
        {menu}
      </div>
    </div>
  );
};
