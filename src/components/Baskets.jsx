import "./basket.css";

function Baskets({ basketsCount, getCurrentBasket }) {
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
    console.log(e.target.innerText);
    getCurrentBasket(e.target.innerText)
  }
  return (
    <div className="allBaskets">
      {basketsCount && basketsCount.length > 0
        ? basketsCount.map((el) => {
            return (
              <div
                className="basket"
                onDragStart={(e, id) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e)}
                draggable={true}
              >
                <span>{el}</span>
              </div>
            );
          })
        : ""}
    </div>
  );
}
export default Baskets;
