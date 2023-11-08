import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <div className="w-96 m-auto">
        <figure>
          <figcaption>Grande Promoção</figcaption>
          <Image src="/blackfriday_640.png" alt='Promoção' width={540} height={360}/>
        </figure>
      </div>
    </div>
  )
}