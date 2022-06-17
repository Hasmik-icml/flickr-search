
export async function getPictures(word){
    console.log(word);
    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=87c5d2f2cf9fc22cfd30e74033157fec&tags=${word}&per_page=5&pages=5&format=json&nojsoncallback=1`)
        const data = await response.json();
        return data;
    } catch (error){
        console.log("wrong", error);
    }
}