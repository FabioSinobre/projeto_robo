import React, {useState} from 'react';
import firebase from 'config/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/app';
import Footer from "components/Footer";
import NavBar from "components/NavBar/index";

function ResetPassword() {
  const[email, setEmail] = useState();
  const[msg, setMsg] = useState(); 

  function NewPassword(){
    firebase.auth().sendPasswordResetEmail(email).then(result =>{
      setMsg('Link enviado com sucesso para o e-mail indicado!')
    }).catch(erro =>{
      setMsg('Verifique se o e-mail está correto!');
    })
  }

  return (
    <>
      <div className="">
        <NavBar />
      </div>

      <div className="login-content d-flex aling-center">
        <form className="mx-auto text-center">
          <h1 className="h3 mb-3 fw-normal wf-bold">Recuperar senha</h1>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-3" id="floatingInput" placeholder="Digite seu e-mail" required />
          <div className='msg my-2 text-center'>
            <span>{msg}</span>
          </div>
          <button onClick={NewPassword} className="button-env btn btn-lg my-2" type="button">Enviar</button>
        </form>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default ResetPassword;