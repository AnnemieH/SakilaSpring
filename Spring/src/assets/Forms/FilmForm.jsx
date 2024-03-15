import { useState } from "react";
import FilmDropDown from "./FilmDropDown.jsx";

export default function FilmForm()
{
    // Are we deleting an entry?
    const [deleting, setDeleting] = useState(false);
    // ID of the selected actor
    const [ID, setID] = useState(0);
    // URL of home actor
    const filmURL = 'http://localhost:8080/home/allFilms'
    
    function storeID ( newID )
    {
        setID(newID);
    }

    function filmJSON(event)
    {
        return JSON.stringify({title: event.target.title.value})
    }

    function submitPost(event)
    {
        event.preventDefault();

        const requestOptions =
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: filmJSON(event)
        };
        fetch(filmURL, requestOptions)
            .then(response => response.json());
    };

    function submitDelete(event)
    {
        const requestOptions =
        {
            method: 'DELETE',
        };
        fetch(filmURL + '/' + ID, requestOptions)
            .then(response => response.json());
    };

    function submitModify(event)
    {
        const requestOptions=
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: filmJSON(event),
        };
        fetch(filmURL + '/' + ID, requestOptions)
            .then(response => response.json())
    };

    function handleSubmit(event)
    {
        // Check to see if we're adding a new actor
        if( event.target.filmDrop.value === 'add')
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

    function handleDeleteChange()
    {
        setDeleting(!deleting);
    }

    return(
        <>
            <label htmlFor="filmDrop">Film to Edit:</label>
            <FilmDropDown id="filmDrop" name="filmDrop" form="filmForm" storeID={storeID}/>
            <form id="filmForm" onSubmit={e => handleSubmit(e)}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" /><br />
                <label htmlFor="deleteBox">Delete? </label>
                <input type="checkbox" id="deleteBox" name="deleteBox" onChange={handleDeleteChange} /><br />
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}