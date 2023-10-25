import Image from "next/image";

export default function Camisa() {
  return (
    <div>
        <h1>Camisa</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dolorum voluptatem. Rem dolor quia facilis repudiandae nobis voluptatem vitae? Cumque quo ullam dolorum fugiat est officia sint quis. Fugit, modi?</p>
            <figure>
                <Image
                    src="https://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
                    alt="Camisa"
                    width={300}
                    height={300}
                    />
            </figure>
        </div>
    </div>
  )
}
