import { useState, useEffect } from "react";
import "./pics.css";
import { nanoid } from "nanoid";

function Pics({ picsResult, basketsCount, currentBasket, getBasketsData }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurretnImage] = useState(null);
  const [updtBaskets, setUpdatedBasket] = useState([]);

  function dragStartHandler(e, p) {
    console.log("p-id", p);
    e.target.style.border = "thick solid yellow";
    setCurretnImage({
      id: e.target.id,
      title: p.title,
      path: p.path,
    });
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
  }

  function dragEndHandler(e, p) {
    e.preventDefault();
    e.target.style.border = "none";
    {images.length === 1 && alert("All pictures are sorted !")}
    if (currentImage) {
      if (currentBasket === currentImage.title) {

        // debugger;
        updtBaskets.forEach((bs) => {
          if (bs.basketTitle === currentImage.title) {
            bs.basketItems.push(p);
          }
        });

        setImages(
          images.filter((img) => {
            return img.id !== currentImage.id;
          })
        );
        
      } 
    }
    getBasketsData(updtBaskets);
    
  }
  useEffect(() => {
    let updatedBaskets = [];
    for (let i = 0; i < basketsCount.length; i++) {
      updatedBaskets.push({
        basketTitle: basketsCount[i],
        basketItems: [],
      });
    }
    setUpdatedBasket(updatedBaskets);
  }, [basketsCount]);

  useEffect(() => {
    let res = [];
    if (picsResult && picsResult.length > 0) {
      picsResult.forEach((el, index) => {
        return (
          el.photos &&
          el.photos.photo.length > 0 &&
          el.photos.photo.forEach((pic) => {
            res.push({
              id: nanoid(),
              title: basketsCount[index],
              path:
                "https://live.staticflickr.com/" +
                pic.server +
                "/" +
                pic.id +
                "_" +
                pic.secret +
                ".jpg",
            });
          })
        );
      });
    }
    setImages(res);
  }, [picsResult]);

  return (
    <div className="picsblock">
      
      {images &&
        images.length > 0 &&
        images.map((p) => {
          return (
            <img
              id={p.id}
              key={p.id}
              onDragStart={(e) => dragStartHandler(e, p)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e, p)}
              className="images"
              src={p.path}
              draggable={true}
            />
          );
        })}
    </div>
  );
}

export default Pics;
