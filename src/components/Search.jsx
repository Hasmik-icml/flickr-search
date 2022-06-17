import React from "react";
import { useState } from "react";
import "./search.css";

function Search({onSearch}) {
  const [text, setText] = useState("");
 

  return (
    <div className="searchDiv">
      <form 
       onSubmit={(e) => {
        e.preventDefault();
        onSearch(text)
      }}
      >
        <input
          type="text"
          value={text}
          className="searchInput"
          placeholder="photos"
          onChange={(e)=>{
            setText(e.target.value);
          }}
        ></input>
        <button className="searchBtn">Search</button>
      </form>
    </div>
  );
}
export default Search;
