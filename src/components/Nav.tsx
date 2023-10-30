import Image from "next/image"
import { ModeToggle } from "./ui/ModeToggle"
import Link from "next/link"

export default function Nav() {
	return <div className="col-start-2 col-end-3 self-start flex items-center justify-between text-primary-foreground">
		<Link href="/">
			<Image src="/mackleaps-logo.svg" alt="Mackleaps logo" width={80} height={71.72} />
		</Link>
		<ul className="flex gap-[2.375em] items-center text-[hsl(0,0%,100%)]">
			<li>Projetos</li>
			<li>Pesquisas</li>
			<li>Equipe</li>
			<li>Sobre</li>
			<li><Link href="/contact">Contato</Link></li>
			<li>Acessibilidade</li>
			<li><ModeToggle /></li>
		</ul> 
	</div>
}