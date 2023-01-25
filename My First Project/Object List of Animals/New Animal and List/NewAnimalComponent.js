import AnimalForm from "./AnimalForm";
import React from "react";


const NewAnimalComponent = (props) =>{
    const saveAnimalDataHandler = (enteredAnimalData) =>{
        const animalData = {
            ...enteredAnimalData,
            id:Math.random().toString()
        };
        props.onAddAnimal(animalData);
    };

    return(<div className='new-animal'>
        <AnimalForm setShow={props.setShow} onSaveAnimalData={saveAnimalDataHandler}/>
    </div>)
};


export default NewAnimalComponent;