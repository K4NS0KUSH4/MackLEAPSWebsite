"use client"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function Home() {
    const formSchema = z.object({
        name: z
        .string()
        .min(3, {
            message: "O nome precisa ter, no mínimo, 3 letras."
        })
        .max(100, {
            message: "O nome digitado é muito longo."
        })
        .trim(),
        email: z
        .string()
        .email({
            message: "E-mail inválido."
        }),
        text: z
        .string()
        .min(1, {
            message: "Esta mensagem é muito curta."
        })
        .max(5000, {
            message: "Esta mensagem é muito longa. Experimente outros canais de comunicação para facilitar o seu contato com o laboratório."
        })
        .trim()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "Insira o seu nome",
            email: "Insira seu endereço de e-mail",
            text: "Escreva a sua mensagem"
        }
    });

    return (<>
        <header className="h-[10em] bg-[#4A6670]">
            <ul>
                <li>Logo</li>
                <li>Coisas</li>
                <li>Coisas</li>
                <li>Coisas</li>
                <li>Coisas</li>

            </ul>
        </header>
        <main className="bg-[#4A6670]">

            <div className='grid grid-cols-3 grid-rows-3 p-[3.125em] rounded-tl-[3.125em] rounded-br-[0em] rounded-tr-[3.125em] rounded-bl-[0em] bg-[#FDFBFB]'>
                <div className="grid-">
                    <h1 className='text-[2rem]'>Entre em contato conosco</h1>
                    <p>Como podemos te ajudar?</p>
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nome" />
                                    </FormControl>
                                    <FormDescription>
                                        Preencha o campo acima com o seu nome.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Enviar</Button>
                        </form>
                    </Form>
                </div>
            </div>

        </main>
    </>
  )
}
