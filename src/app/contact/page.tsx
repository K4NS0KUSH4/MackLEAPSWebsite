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
import {
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Image from "next/image";

export default function Contact() {
    const formSchema = z.object({
        name: z
          .string()
          .min(3, { message: "O nome precisa ter, no mínimo, 3 letras." })
          .max(100, { message: "O nome digitado é muito longo." })
          .trim(),
        email: z
          .string()
          .email({ message: "E-mail inválido." }),
        text: z
          .string()
          .min(1, { message: "Esta mensagem é muito curta." })
          .max(5000, { message: "Esta mensagem é muito longa. Experimente outros canais de comunicação para facilitar o seu contato com o laboratório." })
          .trim()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            text: ""
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {

    }
    return (<div>
        <Header />
        <main className="bg-[#4A6670] pt-[10em]">
            <div className='grid grid-cols-3 pl-[3.125em] pr-[3.125em] pb-[3.125em] rounded-tl-[3.125em] rounded-br-[0em] rounded-tr-[3.125em] rounded-bl-[0em] bg-background relative h-auto'>
                <div className="flex gap-10 justify-center p-[3.125em] w-[61em] h-auto bg-card rounded-[1.25em] absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-30%] shadow-lg">
                    <div>
                      <h1 className='text-[2rem]'>Entre em contato conosco</h1>
                      <p>Como podemos te ajudar?</p>
                      <Form {...form}>
                          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
                              <FormField
                                  control={form.control}
                                  name="name"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Nome</FormLabel>
                                      <FormControl>
                                          <Input placeholder="Name" />
                                      </FormControl>
                                      <FormDescription>
                                          Preencha o campo acima com o seu nome.
                                      </FormDescription>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>E-mail</FormLabel>
                                      <FormControl>
                                          <Input type="email" placeholder="Endereço de e-mail" />
                                      </FormControl>
                                      <FormDescription>
                                          Informe o seu e-mail para que possamos entrar em contato.
                                      </FormDescription>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="text"
                                  render={({ field }) => (
                                      <FormItem>
                                      <FormLabel>Editor de texto</FormLabel>
                                      <FormControl>
                                          {/* <Tiptap description={field.name} onChange={field.onChange}/> */}
                                          <Textarea placeholder="Escreva sua mensagem aqui." />
                                      </FormControl>
                                      <FormDescription>
                                          Vai, pode editar.
                                      </FormDescription>
                                      <FormMessage />
                                      </FormItem>
                                  )}
                              />
                              <Button type="submit">Enviar</Button>
                          </form>
                      </Form>
                    </div>
                    <div>
                      <Image src="/contact-us-img.svg" width={383} height={265} alt="Contact us Image" />
                      <ul className="flex flex-col gap-10 pt-10">
                        <li className="flex gap-2"> <MapPin color="#e1001e" /> R. da Consolação, 930 - Consolação, São Paulo - SP</li>
                        <li className="flex gap-2"> <Mail color="#e1001e" /> email@email.com</li>
                        <li className="flex gap-2"> <Phone color="#e1001e" /> (11) 2114-8000</li>
                      </ul>
                    </div>
                </div>
            </div>

        </main>
    </div>
  )
}
