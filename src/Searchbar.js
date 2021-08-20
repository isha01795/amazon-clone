import React, { useState } from "react";
import "./searchbar.css";
import Api from "./Api.json";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";


function Searchbar() {
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setInput(searchWord);
    const newFilter = Api.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setInput([]);
  };

 
  return (
    <div>
      <div className="header_search">
        <input
          type="text"
          value={input}
          className="header_searchText"
          placeholder="Search your item here"
          onChange={handleFilter}
        />
        {filterData.length === 0 ? (
          <SearchIcon className="header_searchIcon" />
        ) : (
          <CloseIcon className="header_searchIcon" onClick={clearInput} />
        )}
      </div>
      {filterData.length !== 0 && (
        <div className="showResult">
          {filterData.map((value, key) => {
            return (
              <div>
                <Link
                  to={{
                    pathname: "/item",
                    aboutprops: { product: {value} },
                  }}
                > 
                  <a id="searchItem" target="_blank" onClick={clearInput} >
                    {value.title}
                  </a>
                </Link>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );


 
}

export default Searchbar;
