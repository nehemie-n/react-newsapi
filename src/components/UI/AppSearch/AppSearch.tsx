import classNames from "classnames";
import { FormEvent } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./AppSearch.scss";

import {
  RootDispatch,
  setQuery,
  useAppDispatch,
  useAppSelector,
} from "../../../store";

interface Props {
  size?: "sm" | "md";
}
export const AppSearch = ({ size = "md" }: Props) => {
  // store
  const { query } = useAppSelector((state) => state.searchInput);
  const dispatch: RootDispatch = useAppDispatch();

  // form submit
  function submit(e: FormEvent) {
    e.preventDefault();
    goToSearchPage();
  }

  // routing
  const navigate = useNavigate();
  function goToSearchPage() {
    navigate("/search");
  }

  // classes and styling
  const classes = classNames({
    AppSearch: true,
    AppSearch_Sm: size == "sm",
    AppSearch_Md: size == "md",
  });

  const iconSize = size == "md" ? 30 : 20;

  return (
    <div className={classes}>
      <form onSubmit={submit} className="AppSearch_F" action="#">
        {/*  */}
        <label htmlFor="AppSearch" className="AppSearch_Icon">
          <HiSearch color="black" size={iconSize} />
        </label>
        {/*  */}
        {/* <label htmlFor="AppSeach"></label> */}
        <input
          value={query}
          type="text"
          name="AppSearch"
          id="AppSearch"
          placeholder="Search for #What's Up!"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
        {/*  */}
        <button type="submit" onSubmit={submit} hidden></button>
      </form>
    </div>
  );
};
