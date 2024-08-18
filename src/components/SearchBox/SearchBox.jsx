import React from "react";
import "./SearchBox.css"
function SearchBox() {
  return (
    <div className="searchBox">
      <div className="dropdown dropdown-end">
      <input
        tabIndex={0} 
        role="button"
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 mt-3 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
   
    </div>
  );
}

export default SearchBox;
