import { useState, useEffect } from "react";
import ActorDropDown from "./ActorDropDown.jsx";
import FilmListByActor from "./FilmListByActor.jsx";

export default function ActorForm()
{
    // Are we deleting an entry?
    const [deleting, setDeleting] = useState(false);
    const [actor, setActor] = useState([]);
    const [allFilms, setAllFilms] = useState([]);

    // URL of home actor
    const actorURL = 'http://localhost:8080/home/allActors'
    
    useEffect(()=>
    {
        fetch('http://localhost:8080/home/allFilms')
        .then(response => response.json())
        .then(data => 
            {
                setAllFilms(data);
            })
    }
    , []
    );


    // Add a new actor
    function submitPost(event)
    {
        event.preventDefault();

        const requestOptions =
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName: event.target.fname.value, lastName: event.target.lname.value, films: actor.films})
        };
        fetch(actorURL, requestOptions)
            .then(response => response.json());
    };

    // Delete an existing actor
    function submitDelete(event)
    {
        event.preventDefault();
        const requestOptions =
        {
            method: 'DELETE',
        };
        fetch(actorURL + '/' + actor.actorID, requestOptions)
            .then(response => response.json());
    };

    // Modify an existing actor
    function submitModify(event)
    {
        event.preventDefault();
        actor.films.map(film => console.log(film))
        const requestOptions=
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstName: event.target.fname.value, lastName: event.target.lname.value, films: actor.films}),
        };
        fetch(actorURL + '/' + actor.actorID, requestOptions)
            .then(response => response.json())
    };

    // Pipe the submit request according to selected options
    function handleSubmit(event)
    {
        // Check to see if we're adding a new actor
        if( event.target.actDrop.value === 'add')
        {
            // If we are deleting a new entry, ignore
            if( !deleting )
            {
                submitPost(event);
            }
        }
        else
        {
            // Otherwise, if we're deleting, delete the entry
            if ( deleting )
            {
                submitDelete(event);
            }
            else
            {
                // If we're neither making, nor deleting we're probably updating
                submitModify(event);
            }
        }
        
    };

    // Keep track of whether we are deleting an actor or not
    function handleDeleteChange()
    {
        setDeleting(!deleting);
    };

    function addFilmToActor(prevFilms, newFilmID)
    {
        prevFilms.push(allFilms.find(film => 
            film.filmID === newFilmID
        ));
        actor.films = prevFilms;
    };

    function deleteFilmFromActor(isDeleting, film)
    {
        // If we're deleting it, remove film from actor.films, otherwise put it back
        if( isDeleting )
        {
            const index = actor.films.indexOf(film);
            actor.films.splice(index, 1);
        }
        else
        {
            actor.films.push(film);
        }
    };


    function selectActor(newActor)
    {
        // If an actor has been selected, set it
        // Otherwise set an empty actor
        if( newActor !== undefined )
        {
            setActor(newActor);
        }
        else
        {
            setActor(JSON.stringify({firstName: "", lastName: "", films: []}));
        }
    };

    return(
        <form id="actorForm" onSubmit={e => handleSubmit(e)}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="actDrop">Actor to Edit:</label></td>
                        <td><ActorDropDown id="actDrop" name="actDrop" form="actorForm" selectedActor={selectActor}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="fname" className="formlabel">First Name: </label></td>
                        <td><input type="text" id="fname" className="textbox" name="fname" defaultValue={actor.firstName}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="lname" className="formlabel">Last Name: </label></td>
                        <td><input type="text" id="lname" className="textbox" name="lname" defaultValue={actor.lastName}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="filmsIn" className="formlabel">Films Starred In ({actor.films !== undefined && actor.films.length}): </label></td>    
                        <td><FilmListByActor id="filmsIn" form = "actorForm" filmUpdate = {addFilmToActor} filmList={actor.films} deleteFilm={deleteFilmFromActor}/></td>
                    </tr> 
                    <tr>
                        <td><label htmlFor="deleteBox" className="formlabel">Delete? </label></td>
                        <td><input type="checkbox" id="deleteBox" name="deleteBox" onChange={handleDeleteChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Submit"/></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}