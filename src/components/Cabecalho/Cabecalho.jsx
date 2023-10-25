import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
    <nav>
      <ul>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/produtos/camisa">CAMISAS</Link></li>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        <li><Link href="/fazenda">QUEIJOS</Link></li>
      </ul>
    </nav>
  </header>
  )
}
