import { useState, useEffect } from "react";
import "./pics.css";
import { nanoid } from "nanoid";

function Pics({ picsResult, basketsCount, currentBasket }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurretnImage] = useState(null);

  console.log(picsResult);
  console.log(basketsCount);
  console.log(currentBasket);
  
function dragStartHandler(e, p){
    // console.log(e.target.id, "---", p.title);
    e.target.style.border = "thick solid yellow"
    setCurretnImage({
        id: e.target.id,
        title: p.title,
        path: p.path
    })
    console.log(currentImage);
}

function dragLeaveHandler(e){
    e.preventDefault();
    
}

function dragEndHandler(e){
    e.preventDefault();
    
}

function dragOverHandler(e){
    e.preventDefault();
}

function dropHandler(e){
    e.preventDefault();    
   console.log(e.target);
}

  useEffect(() => {
    let res = [];
    if (picsResult && picsResult.length > 0) {
      picsResult.forEach((el, index) => {
        return (
          el.photos &&
          el.photos.photo.length > 0 &&
          el.photos.photo.forEach((pic) => {
            console.log(pic);
            res.push(
              { id: nanoid(),
                title: basketsCount[index],
                path: "https://live.staticflickr.com/" +
                pic.server +
                "/" +
                pic.id +
                "_" +
                pic.secret +
                ".jpg"}
            );
          })
        );
      });
      console.log(res);
    }
    console.log(res);
    setImages(res);
  }, [picsResult]);

  console.log(images);
  return (
    <div className="picsblock">
      {images &&
        images.length > 0 &&
        images.map((p) => {
        //   console.log(p);
          return <img  
          id={p.id}
          onDragStart={(e, id)=> dragStartHandler(e, p)}
          onDragLeave={(e)=> dragLeaveHandler(e)}
          onDragEnd={(e)=> dragEndHandler(e)}
          onDragOver={(e)=> dragOverHandler(e)}
          onDrop={(e)=> dropHandler(e)}
          className="images" 
          src={p.path} 
          draggable={true} />;
        })}
    </div>
  );
}

export default Pics;
