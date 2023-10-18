"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";

import { Icons } from "../icons";
import ModeSwitch from "./ModeSwitch";
import UserNav from "./UserNav";

export default function MainNav() {
  return (
    <div className="hidden justify-between gap-6 bg-background lg:flex">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logo className="w-24 fill-foreground" />
      </Link>
      <NavigationMenu>
        {/* <p className='absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 z-10'>This website is still a work in progress, please excuse the lack of styling</p> */}
        <NavigationMenuList>
          {/* home */}
          <NavigationMenuItem value="home">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* about */}
          <NavigationMenuItem value="about">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* contact */}
          <NavigationMenuItem value="contact">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-24 items-center justify-between gap-2">
        <UserNav />
        <ModeSwitch />
      </div>
    </div>
  );
}
