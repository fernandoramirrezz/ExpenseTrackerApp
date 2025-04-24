"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row items-center">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b4/60/0e/b4600e6d-df1b-8573-f712-dfbb8b2fe23a/AppIcon-0-0-1x_U007emarketing-0-2-85-220.png/434x0w.webp"
          alt="logo"
          width={40}
          height={25}
        />
        <span className="text-black font-bold text-xl ml-2">
          Expense Tracker
        </span>
      </div>

      <div className="flex gap-3 items-center">
        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full">
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
