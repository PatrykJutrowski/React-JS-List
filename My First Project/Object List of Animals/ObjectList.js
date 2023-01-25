import React, { useState} from "react";
import images from './cat-1.jpg'
import images1 from './dog-1.jpg'
import images2 from './cat-2.jpg'
import './ObjectList.css'
import AnimalList from "./Animals/AnimalList";
import NewAnimalComponent from "./Animals/NewAnimalComponent";
import UiBackdrop from "./ui/UiBackdrop";
import AnimalFilter from "./Animals/AnimalFilter";



export const listOfAnimals = [{
    name: 'zarksalot',
    age: 5,
    type: 'dog',
    favFoods: ['tuna ', 'catnip ', 'salmon '],
    image: images,
    id: 1,
    alt: 'logo'
},
    {
        name: 'harksalot',
        age: 2,
        type: 'dog',
        favFoods: ['tuna ', 'catnip ', 'salmon '],
        image: images1,
        id: 2,
        alt: 'logo2'
    },
    {
        name: 'aarksalot',
        age: 7,
        type: 'cat',
        favFoods: ['tuna ', 'catnip ', 'salmon '],
        image: images2,
        id: 3,
        alt: 'logo2'
    }];
const ObjectList = () => {
    const [animalList, setAnimalList] = useState(listOfAnimals);
    const [filterTextValue, setUpdateFilterText] = useState('types');
    const filteredAnimalList = animalList.filter((animal)=>{
        if(filterTextValue  === 'dog' ){
            return animal.type === 'dog';
        }else if (filterTextValue === 'cat'){
            return animal.type === 'cat';
        }else{
            return animal;
        }
    })
    const handleDelete = (id) => {
        const newAnimalList = animalList.filter(animal => animal.id !== id)
        setAnimalList(newAnimalList);
    };
    const addAnimalHandler = animal => {
        setAnimalList(prevAnimals => {
            return [animal, ...prevAnimals];
        });
        setIsShown(false)
    };

    function handleSortName() {
        const sortedDataByName = [...animalList].sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        setAnimalList(sortedDataByName)
        console.log(animalList)
    }

    function handleSortAge() {
        const sortedDataByAge = [...animalList].sort((a, b) => {
            return a.age > b.age ? 1 : -1;
        });
        setAnimalList(sortedDataByAge)
    }

    const [isShown, setIsShown] = useState(false);
    const handleFormAnimal = () => {
        setIsShown(true);
    };
    function onFilterValueSelected(filterValue){
        setUpdateFilterText(filterValue)
    }
    return (<div className='root'>
        <div className='sorting'>
            <button className='button' onClick={handleSortAge}>AGE</button>
            <button className='button' onClick={handleSortName}>NAME</button>
            <AnimalFilter filterValueSelected={onFilterValueSelected}/>
        </div>

        <AnimalList
            animalList={filteredAnimalList}
                    handleDelete={handleDelete} />
        <button className='button' onClick={handleFormAnimal}>+</button>
        {isShown && <UiBackdrop/>}
        {isShown && <NewAnimalComponent setShow={setIsShown} onAddAnimal={addAnimalHandler}/>}

    </div>)
}

export default ObjectList;