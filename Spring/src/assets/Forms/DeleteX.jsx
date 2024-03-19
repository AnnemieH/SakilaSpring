import { useEffect, useState } from "react"

export default function DeleteX (props)
{

    const [deleting, setDeleting] = useState(false)
    const [firstRun, setFirstRun] = useState(true)

    function symbolClicked()
    {
        setDeleting(!deleting);
    }

    useEffect(() => {
        // Stop this from running on render
        if(firstRun)
        {
            setFirstRun(false);
        }
        else
        {
            props.spreadDelete(deleting);
        }
    }, [deleting]
    )

    return(
        <span onClick={symbolClicked} className="delete">
        X 
        </span>
    )
}