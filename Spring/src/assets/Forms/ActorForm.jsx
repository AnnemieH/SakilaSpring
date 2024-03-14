export default function ActorForm()
{
    function handleSubmit(event)
    {
        1 == 1
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last Name: </label>
        <input type="text" id="lname" name="flname" /><br />
        <input type="submit" value="Submit"/>
        </form>
    )
}