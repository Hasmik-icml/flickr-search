import React from "react";
import { useState } from "react";

function Search({onSearch}) {
  const [text, setText] = useState("");
 

  return (
    <div>
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
        <button>Search</button>
      </form>
    </div>
  );
}
export default Search;
