import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

type CardProps = {
    id: number,
    className: string,
    image: string,
    title: string,
    date: string,
    text: string
}

export function PostCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-60 box-border", className)} {...props}>
        <Image src={props.image} width={353} height={202} alt="Card image" className="rounded-tl-xl rounded-tr-xl"/>
      <CardHeader>
        <CardTitle className="line-clamp-3">{props.title}</CardTitle>
        <CardDescription>{props.date}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{props.text}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={"secondary"}>Ler mais</Button>
      </CardFooter>
    </Card>
  )
}