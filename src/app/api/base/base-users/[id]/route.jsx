import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {

  const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

  //Extraindo a lista de usuários do arquivo JSON:
  const lista = await JSON.parse(file);

  const id = params.id;

  if(id > 0 && id <= lista.usuarios.length){
    return NextResponse.json(lista.usuarios.find((user)=> user.id == id));
  }else{
    return id == 0 ? NextResponse.json(lista.usuarios) : NextResponse.redirect("http://localhost:3000/error")
  }
}

export async function POST(request, response){
  
  const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

  //Extraindo a lista de usuários do arquivo JSON:
  const lista = await JSON.parse(file);

  //Recebendo dados assincronos com await;
  const userRequest = await request.json();

  try{
    for (let x = 0; x < lista.usuarios.length; x++) {
      const userLista = lista.usuarios[x];

      //Validando o usuario de fato
      if (userLista.email == userRequest.email && userLista.senha == userRequest.senha) {
        return NextResponse.json({"status":true});
      }
      
    }
  }catch (error){
    console.log(error);
  }

  return NextResponse.json({"status":false});

  //console.log("MENSAGEM : ");
  //console.log(msg);

  

}