
import { useState, useEffect } from 'react';
import "./pics.css";

function Pics({picsResult}){
    const [images, setImages] = useState([]);
 
    console.log(picsResult);
// useEffect(()=>{
//     let newResult = picsResult.join().split(","); 
// })

useEffect(()=>{
    let res = [];
    if (picsResult && picsResult.length > 0 ){
        picsResult.forEach(el => {
            return el.photos && el.photos.photo.length > 0 && el.photos.photo.forEach(pic => {
                console.log(pic);
                res.push('https://live.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg');
            })
        } )
        console.log(res);
    } 
    console.log(res);
    setImages(res);
}, [picsResult])

console.log(images);
    return (
        <div className="picsblock">
            {
            images && images.length > 0 && images.map( p =>{
                console.log(p);
                return <img className="images" src={p}/>
            })
        }
        </div>
    )
}

export default Pics;