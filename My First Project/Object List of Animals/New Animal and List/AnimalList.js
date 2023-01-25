import React from "react";
import "../ObjectList";

const AnimalList = ({animalList, handleDelete}) => {
    return (<div className='animal-list'>
        
        {animalList.map((animalElement) => (
            <div className='animals' key={animalElement.id}>
                <img alt={animalElement.alt} src={animalElement.image}/>
                <ul>
                    <li>Name: {animalElement.name}</li>
                    <li>Type: {animalElement.type}</li>
                    <li>Age: {animalElement.age}</li>
                    <li className='last-el'>FavFoods: {animalElement.favFoods}</li>
                </ul>
                <button onClick={() => handleDelete(animalElement.id)}>X</button>
            </div>

        ))}
    </div>)

}
export default AnimalList;