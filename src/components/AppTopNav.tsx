import { AppButton } from "./UI/AppButton/AppButton";
import { HiCog } from "react-icons/hi";
import { AppSpace } from "./AppSpace";
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
          <AppButton shape="round">English</AppButton>
          {/*  */}
          <AppButton shape="circle">
            <HiCog />
          </AppButton>
          {/* Avatar */}
          <button>
            <img src="" alt="" />
          </button>
          {/*  */}
        </AppSpace>
      </div>
    </div>
  );
}
