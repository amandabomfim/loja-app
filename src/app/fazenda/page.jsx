
export default async function ListaQueijos() {
    let queijos;
    try{
        const response = await fetch("http://localhost:3002/api/laticinios");
        queijos = await response.json();
    }catch(error){
        console.log();
    }

  return (
    <div>
        <h1>Lista de Queijos</h1>
        <div>
            <ul>
                {queijos.map((queijo)=>(
                    <li key={queijo.id}>
                        <p>{queijo.id} - {queijo.nome}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
