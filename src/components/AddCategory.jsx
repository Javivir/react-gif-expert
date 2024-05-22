import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue] = useState('')

    // const onImputChange = (event) => {
    //     console.log(event.target.value)
    //     setinputValue(event.target.value);
    // }

    const onImputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = ( event ) => {

        event.preventDefault();
        if(inputValue.trim().length <=1 ) return;
        // setCategories( categories  => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() )
        setinputValue('');         
    }

  return (
    // <form onSubmit={ (event) => onSubmit(event) } > 
    <form onSubmit={ onSubmit } > 
        < input id="sentValue" 
            type="text"
            placeholder="Buscar gifs"
            value = { inputValue }
            // onChange= { (event) => onImputChange(event) }
            onChange= { onImputChange }
        />
    </form>
  )
}


