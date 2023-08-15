import React, { useEffect, useState } from 'react'
import './DrinkList.scss';
import DrinkItem from '../DrinkItem/DrinkItem';


function DrinkList() {
    const [drinklist, setDrinkList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Failed to fetchPokemons')
            }
            return response.json();
        })
        .then((drinksdata)=>{
            setDrinkList(drinksdata.drinks)
            setIsLoading(false)
        })
        console.log(drinklist);
    },[]);
    if (isLoading) {
        return (
        <li>
            <p>Loading...</p>
        </li>
        );
    }
    return (
        <ul className='drinklist'>
            {drinklist.map((drinkItem) =>(
                <DrinkItem
                key={drinkItem.idDrink}
                name={drinkItem.strDrink}
                img={drinkItem.strDrinkThumb}/>
            ))}
        </ul>
    )
}

export default DrinkList