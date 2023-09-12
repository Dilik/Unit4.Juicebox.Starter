import { Link } from 'react-router-dom'

export default function NavBar() {
  function logOutHandler(event) {
    event.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.reload()
  }
  return (
    <nav className="navbar">
      <Link to="/"><h1 className="logo">JuiceBox</h1></Link>
      <div className="nav-links">
        <Link to="/posts">Posts</Link>
        {localStorage.getItem('user') ? (
          <Link to="/profile">Profile</Link>
        ) : null}
        {!localStorage.getItem('user') ? <Link to="/login">Log In</Link> : null}
        {localStorage.getItem('user') ? (
          <Link to="/posts" onClick={(e) => logOutHandler(e)}>
            Log Out
          </Link>
        ) : null}
      </div>
    </nav>
  )
}
