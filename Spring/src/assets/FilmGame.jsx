import { useState, useEffect } from "react";
import FilmGameFilmList from "./FilmGameFilmList";
import FilmGameActorDropDown from "./FilmGameActorDropDown";
import FilmGameCategory from "./FilmGameCategory";

export default function FilmGame()
{
    const [allFilms, setAllFilms] = useState([]);
    const [allActors, setAllActors] = useState([]);
    const [actor1Films, setActor1Films] = useState([]);
    const [actor1Selection, setActor1Selection] = useState([]);
    const [player1Score, setPlayer1Score] = useState(0);
    const [actor2Films, setActor2Films] = useState([]);
    const [actor2Selection, setActor2Selection] = useState([]);
    const [player2Score, setPlayer2Score] = useState(0);
    const [category, setCategory] = useState("");

    // Fetch actors and store them in allActors
    useEffect(()=>
    {
        fetch('http://localhost:8080/home/allActors')
        .then(response => response.json())
        .then(data => 
            {
                setAllActors(data);
            })
    }
    , []
    );
    
    // Fetch films and store them in allFilms
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

    // Include films based on actor
    function chooseActor1 ( actor )
    {
        setActor1Films(actor.films)
    }

    function chooseActor2 ( actor )
    {
        setActor2Films(actor.films)
    }

    // Figure out who wins
    function whoWins ()
    {
        // Change method of calculation based on category
        switch (category)
        {
            case "titleLength":
                if ( actor1Selection.title.length > actor2Selection.title.length )
                {
                    setPlayer1Score(player1Score + 1);
                }
                else if ( actor1Selection.title.length < actor2Selection.title.length )
                {
                    setPlayer2Score(player2Score + 1);
                }
                else
                {

                }
                break;
            case "length":
                if ( actor1Selection.length > actor2Selection.length )
                {
                    setPlayer1Score(player1Score + 1);
                }
                else if ( actor1Selection.length < actor2Selection.length )
                {
                    setPlayer2Score(player2Score + 1);
                }
                else
                {
                    
                }
                break;
            case "releaseYearNew":   
                if ( actor1Selection.releaseYear > actor2Selection.releaseYear )
                {
                    setPlayer1Score(player1Score + 1);
                }
                else if ( actor1Selection.releaseYear < actor2Selection.releaseYear )
                {
                    setPlayer2Score(player2Score + 1);
                }
                else
                {
                    
                }
                break;
            default:
                console.log("Whoops no category")
        }
    }

    return(
        <table>
            <tbody>
            <tr>
                <td className="topTrumpsCell">
                    Score <br />
                    {player1Score}
                </td>
                <td className="topTrumpsCell">
                    <FilmGameActorDropDown selectedActor={chooseActor1}/>
                </td>
                <td className="topTrumpsCell">
                    <FilmGameFilmList allFilms={allFilms} include={actor1Films} selectFilm={setActor1Selection}/>
                </td>
                <td className="topTrumpsCell">
                    <FilmGameCategory categoryChosen={setCategory}/>
                </td>
                <td className="topTrumpsCell">
                    <FilmGameFilmList allFilms={allFilms} include={actor2Films} selectFilm={setActor2Selection}/>
                </td>
                <td className="topTrumpsCell">
                    <FilmGameActorDropDown selectedActor={chooseActor2}/>
                </td>
                <td className="topTrumpsCell">
                    Score <br />
                    {player2Score}
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button type="button" id="winButton" onClick={() => whoWins()}>Who wins?</button>
                </td>
            </tr>
            </tbody>
        </table>
    )
}