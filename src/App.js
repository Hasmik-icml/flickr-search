
import "./App.css";
import Search from "./components/Search";
import Pics from "./components/Pics"
import Baskets from "./components/Baskets";
import FilteredPics from "./components/FilteredPics";
import { useEffect, useState } from 'react';
import { getPictures } from "./Services/api.js";

function App() {
const [searchText, setSearchText] = useState("");
const [words, setWords] = useState("");

async function showPics(){
  const pics = await getPictures(words)
  console.log(pics);
}
useEffect(()=>{
  const searchingWords = searchText.split(" ").join("+");
  setWords(searchingWords);
},[searchText]);

useEffect(()=>{
 if (words.length > 0) showPics(words);
},[words]);
  return (
    <>
        <Search onSearch={(text)=>{
          setSearchText(text)
          console.log(text);
        }}/>
        <Pics />
        <Baskets />
        <FilteredPics />
    </>
  )
}

export default App;
