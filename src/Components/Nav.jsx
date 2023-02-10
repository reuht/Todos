export default function Nav() {
  
  return (
    <nav className="navbar is-light">
      <a className="navbar-item">
      Todo's
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless">Task</a>
        <div className="navbar-dropdown">
          <a className="navbar-item">performed</a>
          <a className="navbar-item">Pending</a>
          <hr className="navbar-divider" />
          <div className="navbar-item">Version 0.9.4</div>
        </div>
      </div>
    </nav>
  );
}
