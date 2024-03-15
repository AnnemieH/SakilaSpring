import { useState } from "react";
import ActorDropDown from "./ActorDropDown.jsx";

export default function ActorForm()
{
    // Are we deleting an entry?
    const [deleting, setDeleting] = useState(false);
    // ID of the selected actor
    const [ID, setID] = useState(0);
    // URL of home actor
    const actorURL = 'http://localhost:8080/home/allActors'
    
    function storeID ( newID )
    {
        setID(newID);
    }

    function submitPost(event)
    {
        event.preventDefault();


        const requestOptions =
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName: event.target.fname.value, lastName: event.target.lname.value})
        };
        fetch(actorURL, requestOptions)
            .then(response => response.json());
    };

    function submitDelete(event)
    {
        const requestOptions =
        {
            method: 'DELETE',
        };
        fetch(actorURL + '/' + ID, requestOptions)
            .then(response => response.json());
    };

    function submitModify(event)
    {
        const requestOptions=
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstName: event.target.fname.value, lastName: event.target.lname.value}),
        };
        fetch(actorURL + '/' + ID, requestOptions)
            .then(response => response.json())
    };

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

    function handleDeleteChange()
    {
        setDeleting(!deleting);
    }

    return(
        <form id="actorForm" onSubmit={e => handleSubmit(e)}>
            <div className="formLabel">
                <label htmlFor="actDrop">Actor to Edit:</label><br />
                <label htmlFor="fname" className="formlabel">First Name: </label><br />                    
                <label htmlFor="lname" className="formlabel">Last Name: </label><br />
                <label htmlFor="deleteBox" className="formlabel">Delete? </label><br />
            </div>
            <div className="formFields">
                <ActorDropDown id="actDrop" name="actDrop" form="actorForm" storeID={storeID}/><br />
                <input type="text" id="fname" className="textbox" name="fname" /><br />
                <input type="text" id="lname" className="textbox" name="lname" /><br />                      
                <input type="checkbox" id="deleteBox" name="deleteBox" onChange={handleDeleteChange} /><br />
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}