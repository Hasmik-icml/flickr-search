import React from "react"
import { useState } from "react"


function Search(){

    return (
        <div>
            <form>
                <input type="text" value={"text"} className="searchInput" placeholder="photos"></input>
                <button>Search</button>
            </form>
        </div>
    )
}
export default Search;