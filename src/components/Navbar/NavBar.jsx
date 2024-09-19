import '../Navbar/NavBar.css'

export default function NavBar(){
  return (
    <div className="navbar flex-space-between">
      <img src="/icons/logo.svg" />
      <ul className="navbar-list navigation">
        <li><a>Work</a></li>
        <li><a>About</a></li>
        <li><a>Playground</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  );
}