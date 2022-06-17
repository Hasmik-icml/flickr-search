import { useState, useEffect } from "react";
import "./pics.css";
import { nanoid } from "nanoid";

function Pics({ picsResult, basketsCount, currentBasket, getBasketsData}) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurretnImage] = useState(null);
  const [updtBaskets, setUpdatedBasket] = useState([]);

  useEffect(()=>{
    let updatedBaskets = [];
    for (let i = 0; i < basketsCount.length; i++) {
      updatedBaskets.push({
        basketTitle: basketsCount[i],
        basketItems: [],
      });
    }
    setUpdatedBasket(updatedBaskets)
},[basketsCount])

  console.log("currentBasket=", currentBasket);
  console.log("basketsCount=", basketsCount);

//   useEffect(() => {
//     setUpdatedBasket(updatedBaskets);
//   }, []);

  function dragStartHandler(e, p) {
    e.target.style.border = "thick solid yellow";
    setCurretnImage({
      id: e.target.id,
      title: p.title,
      path: p.path,
    });
    currentImage && console.log(currentImage.title);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    
  }

  function dragEndHandler(e, p) {
    e.preventDefault();
    // alert(p.title)
    e.target.style.border = "none";
    console.log("end");
    if (currentImage) {
      if (currentBasket === currentImage.title) {
        console.log("hi");
        // debugger;
        updtBaskets.forEach(bs =>{            
            if (bs.basketTitle === currentImage.title){
                bs.basketItems.push(p);
            }
        })
      } else {
        console.log("bay");
      }
    }
    getBasketsData(updtBaskets);
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e) {
    e.preventDefault();
  }



  console.log("new arrays1", updtBaskets);
  useEffect(() => {
    let res = [];
    if (picsResult && picsResult.length > 0) {
      picsResult.forEach((el, index) => {
        return (
          el.photos &&
          el.photos.photo.length > 0 &&
          el.photos.photo.forEach((pic) => {
            // console.log(pic);
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
      //   console.log(res);
    }
    // console.log(res);
    setImages(res);
  }, [picsResult]);

  console.log(images);
  return (
    <div className="picsblock">
      {images &&
        images.length > 0 &&
        images.map((p) => {
          //   console.log(p);
          return (
            <img
              id={p.id}
              onDragStart={(e, id) => dragStartHandler(e, p)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragEnd={(e) => dragEndHandler(e, p)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e)}
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
