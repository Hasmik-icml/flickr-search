import "./filteredPics.css";
import { useEffect, useState } from "react";

function FilteredPics({ fromBasket, basketsData }) {
  const [basketData, setBasketData] = useState("");

  useEffect(() => {
    setBasketData(basketsData);
  }, [basketsData, fromBasket]);

  return (
    <div className="filterdPics">
      {basketData &&
        basketData.map((bsData) => {
          if (bsData.basketTitle === fromBasket) {
            return bsData.basketItems.map((bImg) => {
              return <img key={bImg.id} className="bImg" src={bImg.path} />;
            });
          }
        })}
    </div>
  );
}
export default FilteredPics;
