import { AppButton } from "./UI/AppButton/AppButton";
import { HiCog } from "react-icons/hi";
import { AppSpace } from "./AppSpace";
import { AppDropdown } from "./UI/AppDropdown/AppDropdown";
import { Menu, MenuItem } from "./UI/AppDropdown/MenuItem";
/**
 * Navigation at the right side
 * @param props
 */
export function AppTopNav() {
  return (
    <div>
      <div className="flex items-center md:order-2">
        <AppSpace>
          {/*  */}
          <AppDropdown
            target={<AppButton shape="round">English</AppButton>}
            menu={
              <Menu>
                <MenuItem>English</MenuItem>
                <MenuItem>French</MenuItem>
                <MenuItem>Chinese</MenuItem>
              </Menu>
            }
          ></AppDropdown>
          {/*  */}
          <AppButton shape="circle">
            <HiCog />
          </AppButton>
          {/* Avatar */}
          {/* <button>
            <img src="" alt="" />
          </button> */}
          {/*  */}
        </AppSpace>
      </div>
    </div>
  );
}
