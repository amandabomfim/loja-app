
export default function Login() {
    return (
      <div>
          <h1>Informações de Usuários:</h1>
          <div>
              <form>
                  <fieldset>
                      <legend>LOGIN</legend>
                      <div>
                          <label htmlFor="idEmail">Email:</label>
                          <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={} onChange={}/>
                      </div>
                      <div>
                          <label htmlFor="idSenha">Senha:</label>
                          <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." value={} onChange={}/>
                      </div>
                      <div>
                        <button>LOGIN</button>
                      </div>
                  </fieldset>
              </form>
          </div>
      </div>
    )
  }
  