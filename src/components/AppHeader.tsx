import { AppLogo } from "./AppLogo";
import { AppScreen } from "./MainLayout/AppMainLayout";
import { AppTopNav } from "./AppTopNav";

export function AppHeader() {
  return (
    <nav className="px-2 md:px-4 py-10">
      <AppScreen>
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <AppLogo size={42}></AppLogo>
          </div>
          {/* Center */}
          <div></div>
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
