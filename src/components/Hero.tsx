import Nav from "./Nav"
import Image from "next/image"

export default function Hero() {
    return <header className="grid grid-cols-[11.75em_1fr_11.75em] grid-rows-2 max-w[100vw] h-[30em] bg-[hsl(196,20%,36%)] pt-2 -mb-12 bg-[url('/hero-image.svg')] bg-center bg-no-repeat bg-cover">
        <Nav />
        <div className="flex gap-2 col-start-2 items-center self-start">
            <Image src="/title-stripes.svg" width={65} height={80} alt="Title stripes"/>
            <div>
                <h1 className="text-7xl font-extrabold text-primary uppercase">mackleaps</h1>
                <p className="text-xl font-extrabold text-[#FFFFFF] uppercase">realizando saltos para o futuro</p>
            </div>
        </div>
    </header>
}