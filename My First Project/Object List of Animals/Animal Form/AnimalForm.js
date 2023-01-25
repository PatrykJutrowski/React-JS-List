import React, {useState} from "react";
import './AnimalForm.css';


const AnimalForm = (props) => {
    const [enterName, setEnterName] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [enterFavFoods, setFavFoods] = useState('');
    const [enterUrl, setEnterUrl] = useState('');
    const [enterType, setEnterType] = useState('');

    const nameEnterFunc = (event) => {
        setEnterName(event.target.value)
    };
    const enterAgeFunc = (event) => {
        setEnterAge(event.target.value)
    };
    const enterFavFoodsFunc = (event) => {
        setFavFoods(event.target.value)
    };
    const enterUrlFunc = (event) => {
        setEnterUrl(event.target.value)
    };
    const enterTypeFunc = (event) => {
        setEnterType(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const animalData = {
            name: enterName,
            age: parseInt(enterAge),
            type: enterType,
            favFoods: [enterFavFoods],
            image: enterUrl,
            alt: 'logo2',
        };
        props.onSaveAnimalData(animalData);
        setEnterName('');
        setEnterType('');
        setEnterUrl('');
        setFavFoods('');
        setEnterAge('');
    };
    const closeWindow= () =>{
        props.setShow(false);
    };
    return (
        <form >
            <div className="new-animal__controls">
                <div className='new-animal_control'>
                    <label>NAME</label>
                    <input type="text" onChange={nameEnterFunc}/>
                </div>
                <div className='new-animal_control'>
                    <label>TYPE</label>
                    <input type="text" onChange={enterTypeFunc}/>
                </div>
                <div className='new-animal_control'>
                    <label>AGE</label>
                    <input type='number' onChange={enterAgeFunc}/>
                </div>
                <div className='new-animal_control'>
                    <label>FavFoods</label>
                    <input type='text' onChange={enterFavFoodsFunc}/>
                </div>
                <div className='new-animal_control'>
                    <label>IMAGE</label>
                    <input alt='' type='url' onChange={enterUrlFunc}/>
                </div>
            </div>
            <div className='buttons_actions'>
                <button className="new-animal__actions"  onClick={submitHandler}>ADD ANIMAL</button>
                <button className='new-animal__actionsCancel' onClick={closeWindow} type='button' >CLOSE</button>
            </div>
        </form>
    )
}

export default AnimalForm;