import React, { useState } from 'react';
import firebase from 'config/firebase';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from "react-router-dom";
import './login.css';

function Login() {
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const[msgType, setMsgType] = useState();

  function logar(){
    firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
    setMsgType('success');
    }).catch(erro =>{
      setMsgType('erro');
    });
  }
  return (
    <div className="login-content d-flex aling-center">
      <form className="mx-auto text-center">
        <h1 className="h3 mb-3 fw-normal wf-bold">Logar</h1>
        <input onChange={(e) => setEmail(e.target.value) } type="email" className="form-control my-3" id="floatingInput" placeholder="Digite seu e-mail" required />
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control my-3" id="floatingInput" placeholder="Digite sua senha" required />
        <button onClick={logar} className="button-env btn btn-lg my-2" type="button">Logar</button>
        <div className='msg-login text-center my-3'>
          {msgType === 'success' && <span className='text-success'><strong>Wow! </strong>Conectado com sucesso! &#128526; </span>}
          {msgType === 'erro' && <span className='text-danger'><strong>Ops! </strong>Verifique se e-mail e senha estão corretos? &#128546;</span>}
        </div>
        <div className="opcao-login">
          <Link to='/recuperarSenha' className="mx-2 link-link">Recuperar senha</Link>
          <span>&#9816;</span>
          <Link to='/novousuario' className="mx-2">Novo Usuário</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;