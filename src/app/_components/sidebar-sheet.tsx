"use client"

import { Button } from "./ui/button"
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react"
import Image from "next/image"
import {
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/app/_components/ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"

const SidebarSheet = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  const handleLogOutClick = async () => {
    await signOut()
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src={data?.user?.image ?? ""} />
          </Avatar>
          <div>
            <p className="font-bold">{data?.user?.name} </p>
            <p className="text-xs">{data?.user?.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
          <h2 className="text-lg font-bold">Olá, faça seu login</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <LogInIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%]">
              <DialogHeader>
                <DialogTitle>Faça login na plataforma</DialogTitle>
                <DialogDescription>
                  Conecte-se usando sua conta do Google
                </DialogDescription>
              </DialogHeader>
              <Button
                variant="outline"
                className="gap-1 font-bold"
                onClick={handleLoginWithGoogleClick}
              >
                <Image src="/google.svg" alt="Google" height={18} width={18} />
                Google
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant={"ghost"} asChild>
            <Link href="/">
              <HomeIcon />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant={"ghost"}>
          <CalendarIcon />
          Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose asChild key={option.title}>
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant="ghost"
              asChild
            >
              <Link href={`/barbershop?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={18}
                  height={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button
          className="justify-start gap-2"
          variant="ghost"
          onClick={handleLogOutClick}
        >
          <LogOutIcon />
          Sair da conta
        </Button>
      </div>
      <SheetClose />
    </SheetContent>
  )
}

export default SidebarSheet
