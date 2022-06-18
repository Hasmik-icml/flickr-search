import "./basket.css";

function Baskets({
  basketsCount,
  getCurrentBasket,
  basketsData,
  getFromBasket,
}) {
  console.log(basketsCount);
  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();
    getCurrentBasket(e.target.innerText);
  }

  return (
    <div className="allBaskets">
      {basketsCount[0] !== "" &&
        basketsCount &&
        basketsCount.length > 0 &&
        basketsCount.map((el) => {
          return (
            <div
              className="basket"
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e)}
              draggable={true}
              onClick={(e) => {
                getFromBasket(e.target.innerText);
              }}
            >
              <span>{el}</span>
              {/* <div className="basket-img">{
                    ( basketsData && basketsData.length > 0) && basketsData.map(d =>{
                    if (d.basketTitle === el) {
                        return  d.basketItems.map(data =>{
                            return <img className="basket-images" src={data.path}/>
                        })
                    }
                })
                }
                </div> */}
            </div>
          );
        })}
    </div>
  );
}
export default Baskets;
