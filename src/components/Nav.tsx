import Image from "next/image"

export default function Nav() {
	return <div className="col-start-2 col-end-3 self-start flex items-center justify-between text-primary-foreground">
		<Image src="/mackleaps-logo.svg" alt="Mackleaps logo" width={80} height={71.72} />
		<ul className="flex gap-[2.375em]">
			<li>Projetos</li>
			<li>Pesquisas</li>
			<li>Equipe</li>
			<li>Sobre</li>
			<li>Contato</li>
			<li>Acessibilidade</li>
		</ul>
	</div>
}