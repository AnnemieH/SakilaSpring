import { useState } from "react";
import DeleteX from "./DeleteX";

export default function ActorFilmItem(props)
{
    const [deleting, setDeleting] = useState(false)

    // Keep propagating deleting upwards
    function spreadDelete(isDeleting)
    {
        setDeleting(isDeleting);
        props.deleteFilm(isDeleting, props.film)
    }

    return(
        <div name={props.film.filmID} className={"deleting" + String(deleting)}>
            {props.film.title} <DeleteX spreadDelete={spreadDelete}/>
        </div>  
    )
}