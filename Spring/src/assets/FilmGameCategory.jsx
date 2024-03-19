export default function FilmGameCategory(props)
{
    function categorySelected(event)
    {
        props.categoryChosen(event.target.value)
    }

    return(
        <select onChange={categorySelected}>
            <option value="titleLength">Film title length</option>
            <option value="length">Film length</option>
            <option value="releaseYearNew">Release Year (newest)</option>
        </select>
    )
}