import { useState } from "react";
import { HiCog } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../store";
import { languages, setLanguage } from "../store/language";
import { AppSpace } from "./AppSpace";
import { AppButton } from "./UI/AppButton/AppButton";
import { AppDropdown } from "./UI/AppDropdown/AppDropdown";
import { Menu, MenuItem } from "./UI/AppDropdown/MenuItem";

/**
 * Navigation at the right side
 * @param props
 */
export function AppTopNav() {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.language);

  /**
   * @param lang
   * @param lang
   */
  function setLanguageLocal(langSelected: string) {
    dispatch(setLanguage(langSelected));
  }

  const functionDisplay = languages[lang];

  return (
    <div>
      <div className="flex items-center md:order-2">
        <AppSpace>
          {/*  */}
          <AppDropdown
            target={<AppButton shape="round">{functionDisplay}</AppButton>}
            menu={
              <Menu>
                {Object.entries(languages).map((l) => {
                  return (
                    <MenuItem key={l[0]} onClick={() => setLanguageLocal(l[0])}>
                      {l[1]}
                    </MenuItem>
                  );
                })}
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
