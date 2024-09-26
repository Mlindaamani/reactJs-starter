import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top p-4 shadow"
      style={{ backgroundColor: "#213A57" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand  text-warning  fw-bold" to="/">
          EBOT-REACT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-warning ">
            <li className="nav-item">
              <Link className="nav-link text-warning  fw-bold" to="/counter">
                CounterReducer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning  fw-bold" to="/list">
                ListGroup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-warning fw-bold" to="/counte-userstate">
                CounterUseStateReducer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning  fw-bold" to="/signup">
                SignupForm
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
