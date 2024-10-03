import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { scroll } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { Button } from "@/shadcn/ui/button";
import { Menu } from "lucide-react";

export function NavBar() {
  // scroll((progress) => console.log(progress));

  function scrollToElement(elementId: string) {
    const targetElement = document.getElementById(elementId) as HTMLDivElement;
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full p-6 md:p-12 z-40 bg-gradient-to-b from-background to-transparent">
      {/* <Logo />
      <div className="hidden items-center gap-5 text-xl md:flex">
        <Button
          className="text-xl"
          variant="link"
          onClick={() => {
            scrollToElement("hero");
          }}
        >
          الرئيسية
        </Button>

        <Button
          className="text-xl"
          variant="link"
          onClick={() => {
            scrollToElement("about-us");
          }}
        >
          نبذة عنا
        </Button>

        <Button
          className="text-xl"
          variant="link"
          onClick={() => {
            scrollToElement("ContactUs");
          }}
        >
          تواصل معنا
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to={"/"}>الرئيسية</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/about-us"}>نبذة عنا</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/contant-us"}>تواصل معنا</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/blog"}>المدونة</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/careers"}>الوظائف</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex opacity-0">
        <Logo />
      </div> */}
    </nav>
  );
}
