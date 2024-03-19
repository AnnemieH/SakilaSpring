import { useEffect, useState } from "react";
import FilmGameFilmListItem from "./FilmGameFilmListItem";

export default function FilmGameFilmList(props)
{
    const [allFilms, setAllFilms] = useState([]);
    const [includedFilms, setIncludedFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState([]);

    useEffect(() =>{
        setAllFilms(props.allFilms)
    }, [props.allFilms]
    );

    useEffect(() => 
    {
        setIncludedFilms(props.include)
    }, [props.include, allFilms]
    );

    function selectFilm(film)
    {
        setSelectedFilm(film);
        props.selectFilm(film);
    }

    return(
        <div className="filmList">
            {includedFilms.map( film => (
                <FilmGameFilmListItem key={film.filmID} name={film.filmID} film={film} selection={selectedFilm} setSelection={selectFilm}/>
            ))}
        </div>
    );
}