import {useState} from "react";

import './AnimalFilter.css'
import "../ObjectList";
import {listOfAnimals} from "../ObjectList";


const AnimalFilter = (props) =>{


    const handleChangeAnimal = (event) =>{
        props.filterValueSelected(event.target.value)

    };
    return(<form className='select'>
        <select onChange={handleChangeAnimal}>
            <option placeholder='types'>types</option>
            <option  value='dog'>dog</option>
            <option  value= 'cat'>cat</option>
        </select>
    </form>)
}

export default AnimalFilter;