import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import Link from "next/link"

export function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image
            src={"/fsw-barber-logo.svg"}
            alt="Logo"
            height={18}
            width={120}
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}
