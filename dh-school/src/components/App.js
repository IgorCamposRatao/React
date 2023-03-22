import './App.css';

function App() {
  return (
    <div id="wrapper">
      <aside className="sidebar" >
        <ul>
          <li>
            <a href="">
              <i classname="fas fa-fw fa-tachometer-alt"></i>
              <span>
                Dashboard - DH Movies
              </span>
            </a>
          </li>
          <hr classname="sidebar-divider" />
          <div className="sidebar-heading">
            Actions
          </div>
          <li>
            <a href="">
              <i classname="fas fa-fw fa-gears"></i>
              <span>
                Genres
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <i classname="fas fa-fw fa-film"></i>
              <span>
                Movies
              </span>
            </a>
          </li>
          <li>
            <a href="">
            <i classname="fas fa-fw fa-users"></i>
              <span>
                Actors
              </span>
            </a>
          </li>
        </ul>
      </aside>

    </div>
  );
}

export default App;
