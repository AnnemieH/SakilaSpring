import { useEffect, useState } from "react"

export default function FilmDropDown(props)
{
    const id = props.id;
    const name = props.name;
    const form = props.form;

    const [films, setFilms] = useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:8080/home/allFilms')
        .then(response => response.json())
        .then(data => 
            {
                setFilms(data);
            })
    }
    , []
    );

    function changeFilm (event)
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
        <select id = {id} name = {name} form = {form} onChange={changeFilm}>
                <option value='add' id='add'>Add Film</option>
                {films.map( film => (
                    <option key={film.filmID} name={film.filmID}>
                        {film.title}
                    </option>
                ))}
        </select>
    )
}