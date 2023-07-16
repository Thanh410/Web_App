"use client";

import Link from "next/link";
import React, { useState } from "react";
import "./navbar.scss";
import DarkModeToggle from "../DarkMode/page";
import { Language } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { locales } from "@/utils/i18n";
import { signIn, signOut, useSession } from "next-auth/react";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

type Links = {
  id: number;
  title: string;
  url: string;
};
const links: Array<Links> = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "about",
    url: "/about",
  },
  {
    id: 5,
    title: "contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const { i18n, t } = useTranslation("navbar");
  const currentLanguage = locales[i18n.language as keyof typeof locales];
  const changeLanguage = (lng: "en" | "vi") => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="navbar">
      <Link href="/" className="logo">
        lamamia
      </Link>
      <div className="links">
        <DarkModeToggle />
        <div className="language">
          <Language />
          <ul className="lists">
            <li
              className={currentLanguage === "English" ? "item active" : "item"}
              onClick={() => changeLanguage("en")}
            >
              English
            </li>
            <li
              className={
                currentLanguage === "Tiếng Việt" ? "item active" : "item"
              }
              onClick={() => changeLanguage("vi")}
            >
              Tiếng Việt
            </li>
          </ul>
        </div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="links">
            {t(link.title)}
          </Link>
        ))}

        {session.status === "authenticated" ? (
          <button className="logout" onClick={() => signOut()}>
            {t("logout")}
          </button>
        ) : (
          <button className="logout" onClick={() => signIn()}>
            {t("login")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
