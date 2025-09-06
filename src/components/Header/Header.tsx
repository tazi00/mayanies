"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import ThemeToggler from "../ThemeToggler";
import Logo from "../Logo";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between py-2 lg:py-4">
          <Logo />
          <nav
            className="flex gap-3 items-center justify-between"
            aria-label="Global"
          >
            <div className="lg:hidden flex gap-3">
              <ThemeToggler />

              <Sheet>
                <SheetTrigger asChild>
                  <Menu />
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-6">
                  <SheetHeader>
                    <SheetTitle className="text-lg font-semibold text-foreground">
                      Navigation
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 flex flex-col space-y-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10"
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link
                      href="/login"
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-primary/10"
                    >
                      Log in
                    </Link>
                  </div>

                  <SheetClose asChild>
                    <Button variant="outline" className="mt-6 w-full">
                      Close
                    </Button>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggler />

              <Link
                href="/login"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
