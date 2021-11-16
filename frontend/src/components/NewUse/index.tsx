function NewUse() {
  return (
    <div className="conteiner">
      <fieldset className=" form-login">
        <legend>Crie seu cadastro aqui!</legend>
        <form className="row g-6">
          <div className="col-md-5">
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Digite seu e-mail" required/>
          </div>
          <div className="col-md-5">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Digite uma senha" required/>
          </div>
          <div className="col-10">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" id="inputName" placeholder="Digite seu nome" required />
          </div>

          <div className="col-md-6">
            <label className="form-label">Fone</label>
            <input type="fone" className="form-control" id="inputFone" placeholder="Digite seu telefone com DDD" />
          </div>

          <div className="col-md-4">
            <label className="form-label">Estado</label>
            <select id="inputState" className="form-select">
              <option selected>Escolha</option>
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
  
          <div className="col-12">
            <button type="submit" className="button-env">Enviar</button>
          </div>

        </form>
      </fieldset>

    </div>
  );
}

export default NewUse;