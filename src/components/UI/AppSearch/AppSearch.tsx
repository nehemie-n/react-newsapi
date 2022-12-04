import "./AppSearch.scss";
import { HiSearch } from "react-icons/hi";
import { EventHandler, FormEvent, useState } from "react";

interface Props {}
export const AppSearch = () => {
  const [query, setQuery] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="AppSearch">
      <form className="AppSearch_F" action="#">
        {/*  */}
        <label htmlFor="AppSearch" className="AppSearch_Icon">
          <HiSearch color="black" size={30} />
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
        <button onSubmit={submit} hidden></button>
      </form>
    </div>
  );
};
