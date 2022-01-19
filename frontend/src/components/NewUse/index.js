import React, { useState } from 'react';
import firebase from 'config/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/app';

import './newUse.css';

function NewUse() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const [msgType, setMsgType] = useState();
  const [load, setLoad] = useState();

  function register() {
    setLoad(1);
    setMsgType(null);

    if (!email || !password) {
      setMsgType('erro')
      setMsg('Você precisa informar um email e senha valida!')
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
      setLoad(0);
      setMsgType('success')
    }).catch(erro => {
      setLoad(0);
      setMsgType('erro')
      switch (erro.message) {
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
          setMsg('A senha deve ter pelo menos 6 caracteres!');
          break;
        case 'Firebase: The email address is badly formatted. (auth/invalid-email).':
          setMsg('O formato do seu email é inválido!');
          break;
        case 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).':
          setMsg('Este email já está sendo utilizado por outro usuário!');
          break;
        default:
          setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
          break;
      }
    })
  }
  return (
    <div className="login-content d-flex aling-center">
      <form className="mx-auto text-center">
        <h1 className="h3 mb-3 fw-normal wf-bold">Cadastro</h1>
        <input type="text" className="form-control my-3" placeholder="Digite seu nome" required />
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-3" placeholder="Digite seu e-mail" required />
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control my-3" placeholder="Digite uma senha" required />
        <div className="col-md-15">
          <select className="form-control my-3">
            <option disabled selected>-- Escolha uma Estado --</option>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
            <option>Outras</option>
          </select>
        </div>
        {
          load ? 
          <button class="btn btn-warning" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
          : <button onClick={register} type="button" className="button-env btn btn-lg my-2">Enviar</button>
        }
        <div className='msg-login text-center my-3'>
          {msgType === 'success' && <span className='text-success'><strong>Wow! </strong>Usuário cadastrado com sucesso! &#128526; </span>}
          {msgType === 'erro' && <span className='text-danger'><strong>Ops! </strong> {msg} &#128546;</span>}
        </div>
      </form>
    </div>
  );
}
export default NewUse;