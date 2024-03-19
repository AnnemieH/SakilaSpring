import { useEffect, useState } from "react"

export default function FilmGameActorDropDown(props)
{
    const id = props.id;
    const name = props.name;

    const [actors, setActors] = useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:8080/home/allActors')
        .then(response => response.json())
        .then(data => 
            {
                setActors(data);
            })
    }
    , []
    );

    function getActorFromID (iD)
    {
        return actors.find(actor => 
            actor.actorID == iD
        )
    }

    // Keep track of the current actor's ID
    function changeActor (event)
    {
        if ( event.target.value === 'add')
        {
            props.selectedActor(undefined)
        }
        else
        {
            props.selectedActor(getActorFromID(event.target.value))
        }
    }

    return(
        <select id = {id} name = {name} onChange={changeActor}>
                <option value='add' id='add'>Choose your actor!</option>
                {actors.map( actor => (
                    <option key={actor.actorID} name={actor.actorID} value={actor.actorID}>
                        {actor.firstName + " " + actor.lastName}
                    </option>
                ))}
        </select>
    )
}