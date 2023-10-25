import { NextResponse } from "next/server"

export async function GET() {
  
    const queijos = [
        {"id":1,"nome":"Esburacado", "tipo":"Gorgonzola", "preco":350}
    ]

    return NextResponse.json(queijos);

}
