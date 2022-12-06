import { AppLogo } from "../AppLogo";
import { AppScreen } from "../MainLayout/AppMainLayout";
import { AppTopNav } from "../AppTopNav";
import "./AppHeader.scss";
import classNames from "classnames";
import { useState } from "react";
import { AppSearch } from "../UI/AppSearch/AppSearch";
import { NavLink } from "react-router-dom";

interface Props {
  showSearch: boolean;
  children?: any;
}
export function AppHeader({ showSearch }: Props) {
  const [sticky, setSticky] = useState(false);

  const classes = classNames({
    AppHeader: true,
    AppHeader_Unsticky: sticky == false,
    AppHeader_Sticky: sticky == true,
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      setSticky(true);
    }
    if (window.scrollY < 20) {
      setSticky(false);
    }
  });

  const searchSize = sticky ? "sm" : "md";

  return (
    <nav className={classes}>
      <AppScreen>
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <NavLink to="/">
              <AppLogo size={42}></AppLogo>
            </NavLink>
          </div>
          {/* Center */}
          <div>
            {showSearch ? <AppSearch size={searchSize}></AppSearch> : null}
          </div>
          {/* Right */}
          <div className="flex items-center md:order-2">
            <AppTopNav></AppTopNav>
            {/*  */}
          </div>
        </div>
      </AppScreen>
    </nav>
  );
}
