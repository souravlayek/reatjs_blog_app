import React, { useState } from "react";
import "./css/search.css";
import { FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

interface Props {
  openStatus: boolean;
  close: () => void;
}

const Search = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("");

  const history = useHistory();

  const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.persist();
    const target: Element = e.target as Element;
    if (target.className === "search-inner") {
      props.close();
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/s?q=" + searchText);
    setSearchText("");
    props.close();
  };
  return (
    <CSSTransition
      in={props.openStatus}
      // out={props.openStatus}
      timeout={1000}
      classNames="searchActive"
      unmountOnExit
    >
      <div onClick={(e) => closeHandler(e)} className="search-container">
        <div className="search-inner">
          <div className="search-box">
            <form onSubmit={(e) => submitHandler(e)}>
              <input
                autoFocus={true}
                type="text"
                placeholder="Search and hit enter..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
            <div className="search-icon">
              <FaSearch color="white" size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Search;
