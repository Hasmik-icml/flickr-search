
import "./App.css";
import Search from "./components/Search";
import Pics from "./components/Pics"
import Baskets from "./components/Baskets";
import FilteredPics from "./components/FilteredPics";
import { useEffect, useState } from 'react';
import { getPictures } from "./Services/api.js";

function App() {
const [searchText, setSearchText] = useState("");
const [words, setWords] = useState([]);
const [picsResult, setPicsResult] = useState([]);
const [currentBasket, setCurrentBasket] = useState(null);
const [basketsData, setBasketsData] = useState("");
const [fromBasket, setFromBasket] = useState("");

async function showPics(words){
  words && words.length > 0 && console.log(words.length);
  let pics ;
  if (words && words.length > 0){
       pics = await Promise.all(
        words.map(w => {
          return getPictures(w);
        })
      )
      setPicsResult(pics);
  }
console.log(picsResult);
}

function getCurrentBasket(basketName){
  setCurrentBasket(basketName);
}

function getBasketsData(basketData){
  setBasketsData(basketData);
}

function getFromBasket(text){
  setFromBasket(text);
  console.log(text);
}
useEffect(()=>{
  const searchingWords = searchText.split(" ");
  setWords(searchingWords);
  console.log(words);
},[searchText]);


useEffect(()=>{
 if (words.length > 0) showPics(words);
},[words]);

  return (
    <>
        <Search onSearch={(text)=>{
          setSearchText(text)
          showPics();
        }}/>
        <Pics picsResult={picsResult} basketsCount={words} currentBasket={currentBasket} getBasketsData={getBasketsData}/>
        <Baskets basketsCount={words} getCurrentBasket={getCurrentBasket} basketsData={basketsData} getFromBasket={getFromBasket}/>
        <FilteredPics fromBasket={fromBasket} basketsData={basketsData}/>
    </>
  )
}

export default App;
