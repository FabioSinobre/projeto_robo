import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
        <div className="conteiner navBar" >
          <header><h1 className="text-robo-1 space">Robô 4N69</h1>
            <ul className="nav justify-content-end ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/WhoWeAre">Quem somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/control">Robô</Link>
              </li>
            </ul>
          </header>
        </div>
    </>
  );
}

export default NavBar;