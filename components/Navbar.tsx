import { navlinks } from "@/constant/dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-8">
      <nav className="flex justify-between items-center">

        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/assets/images/ecommerce.svg"
            alt="Logo"
            width={39}
            height={259}
            className="m-0 w-[39px] h-[59px] mx-4"
          />
          <p className="font-bold text-lg">Ecommerce</p>
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link href={link.route} className="flex justify-center items-center gap-3">
                <p>{link.label}</p>
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  height={20}
                  width={20}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href='/signin' className="flex justify-between items-center gap-3 mr-4">
            <p className="">Sign in</p>
            <Image 
              src='/assets/icons/user.svg'
              alt="User"
              width={23}
              height={23}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
