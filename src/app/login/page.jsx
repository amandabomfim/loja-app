"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {

  const navigate = useRouter();

  //Este useState, representa o objeto usuário, enquanto está sendo preenchido no form e
  // em qualquer momento dentro do componente!!
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const [msg, setmsg] = useState("");
  const [classeLoginMsg, setClasseLoginMsg] = useState("");

  useEffect(() => {
    if(msg == "Usuário Validado com Sucesso!"){
      setClasseLoginMsg("login-sucesso");
    }else if(msg == "Usuário e ou Senha inválidos!!"){
      setClasseLoginMsg("login-erro");
    }else{
      setClasseLoginMsg("login-none");
    }
  }, [msg])
  

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
                //Redirecionando o usuário para a página HOME!
                navigate.push("/");
            },5000);
        } else {
          
            setmsg("Usuário e ou Senha inválidos!!");
            setTimeout(()=>{
                setmsg("");
                setUsuario({
                  email:"",
                  senha:""
                });
            },5000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Informações de Usuários:</h1>

      <h2 className={classeLoginMsg}>{msg}</h2>

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
            <div>
              <p>Se você ainda não possui registro.  <Link href="/cad-user">CLIQUE AQUI</Link></p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
