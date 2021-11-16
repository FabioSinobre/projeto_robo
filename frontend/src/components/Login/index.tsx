import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="conteiner">
      <fieldset className=" form-login">
        <legend>Faça seu login aqui!</legend>
        <form className="form-login" action="">
          <div className="col-md-5" >
            <label className="">e-mail:</label>
            <input type="email" className="form-control" placeholder="Digite seu e-mail" required />
          </div>
          <div className="col-md-5" >
            <label className="">senha:</label>
            <input type="password" className="form-control" placeholder="Digite sua senha" required />
          </div>
          <div className="">
            <button className="button-env" type="submit">Enviar</button>
            <Link className="nav-link-NewUse" to="/NewUse">Novo cadastro</Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;