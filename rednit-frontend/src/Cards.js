//import { Person } from '@mui/icons-material';
import React,{useState,useEffect} from 'react';
import "./Cards.css";
import TinderCard from 'react-tinder-card';
import axios from './axios';


function Cards() {
    const [people, setPeople]= useState([]);
useEffect(() => {
    async function fetchData(){
        const req = await axios.get('/rednit/cards');
        setPeople(req.data);
    }
    fetchData();
}, []);

    console.log(people);

    const swiped=(directionm, nameToDelete)=>{
        console.log("removing"+nameToDelete);
    //    setLastDirection(directionm);
    };
    const outOfFrame=(name)=> {
        console.log(+"Left the screen!");
    };
    
    return( 
        <div className="cards">
            <div className="cards__cardcontainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir,person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage:`url(${person.imgUrl})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                ))}
                </div>
        </div>
            );
}

export default Cards;
