
export const getGifs  = async( category ) => {
    // console.log( category );

    const url = `https://api.giphy.com/v1/gifs/search?api_key=nEYYQb8YoqJpceX8eKg8MT8Z7kGpWkQO&q=${ category }&limit=5`

    const resp = await fetch ( url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )

    // console.log(gifs);
    return gifs;
}
