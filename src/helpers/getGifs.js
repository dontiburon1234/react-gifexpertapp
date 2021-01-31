


export const getGifs = async( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=VGXdDdRURuGp94qIeSrnUb7Tdd61at8B&q=${ encodeURI( category )}&limit=5`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    // console.log(gifs);
    // setImages( gifs );
}