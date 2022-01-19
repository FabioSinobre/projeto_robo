import Footer from "components/Footer";
import NavBar from "components/NavBar";
function ResetPassword() {
    return (
        <>
        <div className="">
            <NavBar />
        </div>

      <div className="login-content d-flex aling-center">
          <form className="mx-auto text-center">
            <h1 className="h3 mb-3 fw-normal wf-bold">Recuperar senha</h1>
              <input type="email" className="form-control my-3" id="floatingInput" placeholder="Digite seu e-mail" required />
              <button className="button-env btn btn-lg my-2" type="submit">Enviar</button>
          </form>
      </div>
      <div>
          <Footer />
      </div>
      </>
    );
  }
  
  export default ResetPassword;