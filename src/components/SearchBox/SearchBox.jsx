import React, { useEffect, useState } from "react";
import "./SearchBox.css"
import SearhItem from "./SearhItem";
import { useQuery } from "react-query";
import { fetchSearchData } from "../../services/fetchSearchData";
function SearchBox() {


  let [searchResult, setSearchResult] = useState(["whta"]);
  let [searchText, setSearchText] = useState("");
  const {data, isError, isLoading, error} = useQuery(["searchData", searchText], () => fetchSearchData(searchText), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  })



  return (
    <div className="searchBox">
      <div className="dropdown dropdown-end">
      <input
        tabIndex={0} 
        role="button"
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
        onChange={(e)=> {setSearchText(e.target.value)}}
      />
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 mt-3 rounded-box z-[1] w-80 p-2 shadow"
        >
          {isLoading && <span className="loading loading-dots loading-lg"></span>}
          {isError && <span>{error}</span>}
          {data ? data.map(item => <SearhItem coinData={item} key={item.id}/>) : <li><a>Nothing</a></li>}
        </ul>
      </div>
   
    </div>
  );
}

export default SearchBox;
