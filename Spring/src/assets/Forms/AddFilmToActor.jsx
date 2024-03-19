import { useState, useEffect } from "react";

export default function AddFilmToActor(props)
{
    const id = props.id;
    const name = props.name;
    const form = props.form;

    const [films, setFilms] = useState([]);
    const [excludedFilms, setExcludedFilms] = useState([]);
    const [includedFilms, setIncludedFilms] = useState([]);

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

    useEffect(() =>
    {
        setExcludedFilms(props.exclusions);
    }, [props.exclusions]
    )

    useEffect(() => 
    {
        exclude();
    }, [excludedFilms, films]
    )

    // Take an array and return an array simply containing the IDs
    function reduceFilmArrayToID ( arr ) {return arr.map( e => e.filmID )}

    // Remove films actor is already known to have starred in from possibilities
    function exclude()
    {
        setIncludedFilms(films.filter(film => !reduceFilmArrayToID(excludedFilms).includes(film.filmID)));
    }

    function addFilm ( event )
    {
        // If the film selected isn't the header 'add' text, propagate the event up
        if ( event.target.value !== 'add' )
        {
            props.addFilmFunction(event);
        }
    }

    return(
        <select id = {id} name = {name} form = {form} onChange={addFilm}>
            <option value='add' id='addFilmToActor'>Add film to actor</option>
                {includedFilms.map( film => (
                    <option key={film.filmID} name={film.filmID} value={film.filmID}>
                        {film.title}
                    </option>
                ))}
        </select>
    )
}