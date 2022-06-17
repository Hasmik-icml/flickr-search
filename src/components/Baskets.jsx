import "./basket.css";

function Baskets({ basketsCount, getCurrentBasket, basketsData, getFromBasket }) {
    console.log("basketsData = ", basketsData);

  function dragStartHandler(e) {
    e.target.style.border = "thick solid yellow";
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
  }

  function dragEndHandler(e) {
    e.preventDefault();
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();
    // console.log(e.target.innerText);
    getCurrentBasket(e.target.innerText)
  }
  return (
    <div className="allBaskets">

      {basketsCount && basketsCount.length > 0
        && basketsCount.map((el) => {
            return (
              <div
                className="basket"
                onDragStart={(e, id) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e)}
                draggable={true}
                onClick={(e)=>{
                    getFromBasket(e.target.innerText)
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
          })
        }
    </div>
  );
}
export default Baskets;
