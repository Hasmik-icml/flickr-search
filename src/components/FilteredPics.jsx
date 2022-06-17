import "./filteredPics.css";
import { useEffect, useState } from 'react';

function FilteredPics({fromBasket, basketsData}){
    const [basketData, setBasketData] = useState("");
    console.log("basketsData=", basketsData);

    useEffect(()=>{
        setBasketData(basketsData);
    },[basketsData, fromBasket] )
    return (
        <div className="filterdPics">
          {basketData && basketData.map(bsData =>{
            if(bsData.basketTitle === fromBasket){
               return bsData.basketItems.map(bImg => {
                    console.log(bImg.path);
                    return <img className="bImg" src={bImg.path}/>
                })
            }
          })}
        </div>
    )
}
export default FilteredPics;