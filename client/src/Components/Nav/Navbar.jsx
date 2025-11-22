import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Notes</div>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search notes..."
          className="search-input"
        />
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home">Name</a></li>
        <li><a href="#notes">Avatar</a></li>
        
      </ul>
    </nav>
  )
}

export default Navbar;