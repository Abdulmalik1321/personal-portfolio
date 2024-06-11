import { ModeToggle } from "@/shadcn/mode-toggle";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { Button } from "@/shadcn/ui/button";
import { Menu } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-full p-6 md:p-12 bg-gradient-to-b from-background to-transparent">
      <Logo />
      <div className="hidden items-center gap-5 text-xl md:flex">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About us</Link>
        <Link to={"/"}>Contant us</Link>
        <Link to={"/"}>Blog</Link>
        <Link to={"/"}>Careers</Link>
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
              <Link to={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/about-us"}>About us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/contant-us"}>Contant us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/blog"}>Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/careers"}>Careers</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex opacity-0">
        <Logo />
      </div>
    </nav>
  );
}
