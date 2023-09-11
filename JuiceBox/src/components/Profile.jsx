import { Link } from "react-router-dom"

export default function Profile(){
    return(
        <>
        <div className='navbar'>
        <Link to={"/Profile"}>Profile</Link>
        <Link to={"/Posts"}>Posts</Link>
        <Link to={"/Register"}>Register</Link>
        <Link to={"/"}>Login</Link>
        <Link to={"/Logout"}>Logout</Link>
        </div>

        <h1>Profile</h1>
        </>
    )
}