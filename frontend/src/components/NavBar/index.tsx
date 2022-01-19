import { Link } from "react-router-dom";

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
              <Link className="nav-link" to="/quemsomos">Quem somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/novousuario">Cadastrar</Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default NavBar;