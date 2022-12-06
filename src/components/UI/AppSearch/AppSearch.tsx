import classNames from "classnames";
import { FormEvent, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./AppSearch.scss";

interface Props {
  size?: "sm" | "md";
}
export const AppSearch = ({ size = "md" }: Props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submit(e: FormEvent) {
    e.preventDefault();
    goToSearchPage();
  }

  function goToSearchPage() {
    navigate("/search");
  }

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
          type="text"
          name="AppSearch"
          id="AppSearch"
          placeholder="Search for #What's Up!"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/*  */}
        <button type="submit" onSubmit={submit} hidden></button>
      </form>
    </div>
  );
};
