import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./css/smallsearch.css";

interface Props {}

const SmallSearch = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();
  const form = useRef<any>(null);
  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push("/s?q=" + searchText);
    setSearchText("");
  };
  return (
    <div className="smallsearch">
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search and hit enter..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch
          style={{ cursor: "pointer" }}
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default SmallSearch;
