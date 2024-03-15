import { useEffect, useState } from "react"

export default function ActorDropDown(props)
{
    const id = props.id;
    const name = props.name;
    const form = props.form;

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

    function changeActor (event)
    {
        if ( event.target.value === 'add')
        {
            props.storeID(0)
        }
        else
        {
            props.storeID(event.target.childNodes[event.target.selectedIndex].getAttribute('name'))
        }
    }

    return(
        <select id = {id} name = {name} form = {form} onChange={changeActor}>
                <option value='add' id='add'>Add Actor</option>
                {actors.map( actor => (
                    <option key={actor.actorID} name={actor.actorID}>
                        {actor.firstName + " " + actor.lastName}
                    </option>
                ))}
        </select>
    )
}