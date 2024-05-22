
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch'])


    const onAddCategory = ( newCategory) => {
        if ( categories.includes(newCategory) ) return
        // seTcategories ( categories.push( "Valorant" ) )  esto no se puede
        setCategories ([ newCategory, ...categories ]);
        // seTcategories ( cat => {[ ...cat, 'Valorant' ]});
        // console.log( categories )        
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories = { setCategories }                      
                onNewCategory = { (value) => { onAddCategory( value ) } }   
                
            />

            {              
                categories.map( ( category ) => (
                    < GifGrid 
                        key = { category }
                        category = { category }
                    />
                ) )
            }
           
        </>
    )
}
