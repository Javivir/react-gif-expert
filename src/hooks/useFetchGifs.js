import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {              // es un hoot no poner {}

    const [images, setImages] = useState([]);            // guarda estado el FC
    const [isLoading, setIsLoading] = useState( true );



    const getImages = async() => {                       //promesa que no puede ir dentro de useEffect
        const newImages = await getGifs( category );     // llamada a FC que hace la conexión y return array de objetos
        setImages ( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [] )


    return{
        images,
        isLoading
    }

    // return{
    //     images: images,
    //     isLoading: true
    // }

}
