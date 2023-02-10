export default function Nav() {
  
  return (
    <nav className="navbar is-light">
      <a class="navbar-item">
      Todo's
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link is-arrowless">Task</a>
        <div class="navbar-dropdown">
          <a class="navbar-item">performed</a>
          <a class="navbar-item">Pending</a>
          <hr class="navbar-divider" />
          <div class="navbar-item">Version 0.9.4</div>
        </div>
      </div>
    </nav>
  );
}
