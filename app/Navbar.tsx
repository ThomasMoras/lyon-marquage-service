"use client";

import Link from "next/link";
import React from "react";
import { FaBtc } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { lusitana } from "./ui/fonts";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

const Navbar = () => {
  const handleClick = () => {
    console.log("toto");
  };

  const currentPath = usePathname();
  const linkArray = [
    { href: "/", label: "Accueil" },
    { href: "/serigraphie", label: "Sérigraphie" },
    { href: "/broderie", label: "Broderie" },
    { href: "/enseigne", label: "Enseignes" },
    { href: "/objet-publicitaire", label: "Objets publicitaires" },
    { href: "/nos-realisations", label: "Nos réalisations" },
    { href: "/contact", label: "Nous contacter" },
  ];
  return (
    <nav className="navbar bg-base-100 nav-custom">
      <div className="navbar-start">
        <div className="dropdown flex  xl:hidden">
          <Link className="" href="/">
            <Image src="/logo.png" height={75} width={75} alt={""} />
          </Link>
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-16 z-[1] p-1 shadow bg-base-100 rounded-box w-56"
          >
            {linkArray.map((link) => (
              <Link
                href={link.href}
                className={classnames({
                  "text-cyan-700": link.href === currentPath,
                  "text--500": link.href != currentPath,
                  "btn btn-ghost normal-case text-xl hover:bg-white hover:underline underline-offset-8":
                    true,
                  [`${lusitana.className}`]: true,
                })}
                key={link.href}
              >
                {link.label}{" "}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden xl:flex">
        <Link className="pr-7" href="/">
          <Image src="/logo.png" height={75} width={75} alt={""} />
        </Link>
        {linkArray.map((link) => (
          <Link
            href={link.href}
            className={classnames({
              "text-cyan-700": link.href === currentPath,
              "text-purple-500": link.href != currentPath,
              "btn btn-ghost normal-case text-xl hover:bg-white hover:underline underline-offset-8":
                true,
              [`${lusitana.className}`]: true,
            })}
            key={link.href}
          >
            {link.label}{" "}
          </Link>
        ))}
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};

export default Navbar;
