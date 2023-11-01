"use client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  //Este useState, representa o objeto usuário, enquanto está sendo preenchido no form e
  // em qualquer momento dentro do componente!!
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [msg, setmsg] = useState("");

  const handleChange = (e) => {
    //Destructuring dos campos que estão sendo digitados!
    const { name, value } = e.target;
    //Preeenchendo os campos com o useState utilizando também o
    //operador SPREAD.
    setUsuario({ ...usuario, [name]: value });
  };

  //A função handleSubmit, deve realizar a chamada para a API de validação de dados
  // utilizando o método POST, passando o objeto usuário e recebendo um booleano com
  // o resultado.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-users/0",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        const status = await response.json();
        if (status.status) {
            setmsg("Usuário Validado com Sucesso!");
            setTimeout(()=>{
                setmsg("");
            },3000);

          redirect("/");
        } else {
          
            setmsg("Email ou senha inválidos!");
            setTimeout(()=>{
                setmsg("");
            },3000);

          setUsuario({
            email: "",
            password: "",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Informações de Usuários:</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="idEmail"
                placeholder="Digite seu Email."
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Digite sua Senha."
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>LOGIN</button>
            </div>
          </fieldset>
        </form>
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
