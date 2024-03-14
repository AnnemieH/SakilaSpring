import {useEffect, useState} from "react";

export default function Spring()
{
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>
    {
        setLoading(true);

        fetch('http://localhost:8080/home/allActors')
        .then(response => response.json())
        .then(data => {
                setActors(data);
                setLoading(false);
            })
    }
    , []
    );

    if (loading)
    {
        return <p>Loading...</p>
    }

    return (
        <div className="actors">
            
            <h2>Actor List</h2>
            <ul>
                {actors.map(actor => (
                    <li key={actor.actorID}>
                        {actor.firstName + " " + actor.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
}