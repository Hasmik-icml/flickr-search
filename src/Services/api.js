
export async function getPictures(word){
    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=87c5d2f2cf9fc22cfd30e74033157fec&tags=${word}&format=json&nojsoncallback=1`)
        const data = await response.json();
        return data;
    } catch (error){
        console.log("wrong", error);
    }
}