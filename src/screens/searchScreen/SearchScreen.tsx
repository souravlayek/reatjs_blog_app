import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BigCard from "../../components/bigCard/BigCard";
import { useQuery } from "../../configs/Utility";
import "./css/searchscreen.css";

interface Props {}

const SearchScreen = (props: Props) => {
  const searchText = useQuery(useLocation().search, "q");
  useEffect(() => {
    (document.querySelector("body") as Element).scrollIntoView();
  }, []);
  return (
    <div className="searchScreen">
      <div className="heading">
        <div className="text">Search Results for</div>
        <div className="res">{searchText !== null && searchText}</div>
      </div>
      <div className="results">
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </div>
    </div>
  );
};

export default SearchScreen;
