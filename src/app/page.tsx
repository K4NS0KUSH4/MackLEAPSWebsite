import Hero from "@/components/Hero"
import Image from "next/image"
import { PostCard } from "@/components/PostCard"
import { Button } from "@/components/ui/button"

const news = [
    {
        id: 1,
        className: "",
        image: "card-image.svg",
        title: "Karine Choi e João Pedro trabalham duro em protótipo",
        date: "18 ago. 2023",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium nihil inventore! Veritatis, nihil? Officiis molestiae eum doloribus nemo praesentium, corrupti, dignissimos atque, repellendus obcaecati illum aliquid perspiciatis minus magni?",
    },
    {
        id: 2,
        className: "",
        image: "card-image2.svg",
        title: "O que fazer em momentos de desespero?",
        date: "29 out. 2023",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium nihil inventore! Veritatis, nihil? Officiis molestiae eum doloribus nemo praesentium, corrupti, dignissimos atque, repellendus obcaecati illum aliquid perspiciatis minus magni?",
    },
]

export default function Home() {
    const postArray = news.map(post => <PostCard key={post.id} {...post}/>);

    return <div className="bg-background">
        <Hero />
        <main className="pl-[11.75em] pr-[11.75em] pb-[3.125em] rounded-tl-[3.125em] rounded-br-[0em] rounded-tr-[3.125em] rounded-bl-[0em] bg-background relative h-auto p-[3.125em]">
            <div className="flex gap-20 justify-between items-center">
                <div>
                    <h2 className="uppercase text-foreground text-5xl font-extrabold w-80">saiba mais sobre o nosso laboratório</h2>
                    <Button className="w-44 mt-10">Confira</Button>
                </div>
                <div className="flex gap-3">
                    {postArray}
                </div>
            </div>
            <div className="mt-10">
                <h2 className="uppercase text-foreground text-5xl font-extrabold w-80">projetos</h2>
                <p className="text-foreground">Conheça os projetos realizados no laboratório</p>
                <Button className="w-44 mt-10">Confira</Button>
                <div className="mt-10">
                    <div className="flex gap-6">
                        <div className="w-[251px] h-[186px] rounded-md box-border">
                            <img src="/project-image1.svg" alt="Project Image" className="w-[100%] h-auto object-cover"/>
                        </div>
                        <div>
                            <p className="text-sm text-primary text-semibold">Em andamento</p>
                            <h3 className="text-foreground text-bold text-lg">Estação meteorológica</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, modi corporis sapiente commodi consequatur praesentium aperiam quisquam sunt minus deserunt facere est earum laborum, aliquid velit rem voluptatum. Minus, sunt?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
}