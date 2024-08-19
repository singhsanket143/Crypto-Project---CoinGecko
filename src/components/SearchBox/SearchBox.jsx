import "./SearchBox.css"
import SearhItem from "./SearhItem";
import useFetchSearchData from "../../hooks/useFetchSearchData";
import { useEffect } from "react";
function SearchBox() {


  let {data, isLoading, isError, error, setSearchText, searchText} = useFetchSearchData()
  useEffect(() => {
    console.log(data);
  }, [data])



  return (
    <div className="searchBox">
      <div className="dropdown dropdown-end">
      <input
        tabIndex={0} 
        role="button"
        type="text"
        placeholder="Search"
        value={searchText}
        className="input input-bordered w-24 md:w-auto"
        onChange={(e)=> {setSearchText(e.target.value)}}
      />
        <ul
          tabIndex={0}
          className="dropdown-content menu flex flex-col justify-center items-center bg-base-200 mt-3 rounded-box z-[1] w-72 md:w-80 left-[-160px] p-2 shadow"
        >
          {isLoading && <span className="loading loading-dots loading-lg"></span>}
          {isError && <span>{error}</span>}
          {(data &&  data.length == 0) && <li>No Suggestion</li>}
          {data && data?.map(item => <div className='mb-2 w-full' key={item.id}><SearhItem setSearchText={setSearchText} coinData={item}/></div>)}
        </ul>
      </div>
   
    </div>
  );
}

export default SearchBox;
