import { useEffect, useState } from "react"
import { UncontrolledTooltip, Tooltip } from "reactstrap";

export default function FilmGameFilmListItem(props)
{
    const [selected, setSelected] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [targetName, setTargetName] = useState("a" + Math.floor(1000000 * Math.random()));

    // If the selection equals this film, set selected to true
    useEffect(() => {
        if ( props.selection === props.film )
        {
            setSelected(true);
        }
        else
        {
            setSelected(false);
        }
    }, [props.selection])

    // Set the name for the Tooltip target manually because レアクトストラップは馬鹿だよ
    useEffect(() => {
        setTargetName("iD" + props.film.filmID);
        setTooltipOpen(false);
    }, [props.film]
    )

    // Make sure that tooltips aren't open if the targetName is still default, again because レアクトストラップは馬鹿だよ
    function openTooltip()
    {
        console.log(targetName)
        if ( targetName !== "a" )
        {
            setTooltipOpen(!tooltipOpen)
        }
        else
        {
            console.log("Hello")
        }
    }

    return(
        <>
            <div id={targetName} name={props.name} className={"gameFilmList " + String(selected)} onClick={() => props.setSelection(props.film)}>
                {props.film.title}
            </div>
            
            <Tooltip className="tooltip" isOpen={tooltipOpen} placement="right" target={targetName} toggle={() => openTooltip()} delay={400} trigger="hover">
                {props.film.title}<br />
                {props.film.description}<br />
                {props.film.releaseYear}<br />
                {props.film.length}<br />
                {props.film.rating}
            </Tooltip>
        </>
    )
}