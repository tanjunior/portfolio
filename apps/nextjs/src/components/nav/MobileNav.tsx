"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Icons } from "@/icons";
import { Button } from "@/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet";
import { useAuth, useClerk } from "@clerk/nextjs";

import { cn } from "~/utils";
import ModeSwitch from "./ModeSwitch";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type MobileLinkProps = {
  children?: ReactNode;
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  const active =
    href == "/" && segment == "null" ? true : href.includes(segment);
  return (
    <Link
      href={href}
      className={cn(
        "transition-colorshover:bg-accent h-10 w-full min-w-full items-start rounded-md bg-background px-4 py-2 text-xl font-medium text-foreground/70 transition-colors hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        active && "bg-accent text-accent-foreground outline-none",
        disabled && "pointer-events-none opacity-60",
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const { signOut } = useAuth();
  const { session } = useClerk();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col pl-1 pr-0">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Icons.logo
                className="mr-2 w-16 fill-foreground"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
          </SheetTitle>

          {session?.isAuthorized && (
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.username}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user.emailAddresses[0]!.emailAddress}
              </p>
            </div>
          )}
        </SheetHeader>
        <div className="flex flex-1 flex-col">
          <MobileLink href="/" segment={String(segment)} setIsOpen={setIsOpen}>
            Home
          </MobileLink>
          <MobileLink
            href="/about"
            segment={String(segment)}
            setIsOpen={setIsOpen}
          >
            About
          </MobileLink>
          <MobileLink
            href="/contact"
            segment={String(segment)}
            setIsOpen={setIsOpen}
          >
            Contact
          </MobileLink>
        </div>
        <SheetFooter>
          <div className="flex w-full justify-evenly">
            {session?.isAuthorized && (
              <Button
                variant={"destructive"}
                onClick={async () => await signOut()}
              >
                Sign out
              </Button>
            )}
            <ModeSwitch />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
