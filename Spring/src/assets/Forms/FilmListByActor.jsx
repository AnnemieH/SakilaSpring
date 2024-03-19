import { useEffect, useState } from "react";
import AddFilmToActor from "./AddFilmToActor";
import ActorFilmItem from "./ActorFilmItem";

export default function FilmListByActor(props)
{
    const [films, setFilms] = useState([]);

    // If the component updated the films, reset films state
    useEffect(() => {
        setFilms(props.filmList);}
        ,[props.filmList]
    )
    // If film list is null, return empty
    if ( films == null )
    {
        return(<></>);
    }

    function addFilm(event)
    {
        props.filmUpdate(films, Number(event.target.value));
    }

    function deleteFilm(isDeleting, film)
    {
        props.deleteFilm(isDeleting, film)
    }

    return(
        <div id={props.id}>
            <AddFilmToActor form = {props.form} exclusions={films} addFilmFunction = {addFilm} deleteFilm = {deleteFilm}/>
        {films.map( film => (
            <ActorFilmItem key={film.filmID} film={film} deleteFilm={deleteFilm} />
        ))}
        {/* Offer a drop down of remaining films to add */}
        </div>
    )
}