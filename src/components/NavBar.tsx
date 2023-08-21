//Next
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
//Assets
import { LogoBlack, LogoWhite } from "~/assets";
//Icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

const NavBar = () => {
  const [newTheme, setNewTheme] = useState("night");
  const { data: sessionData } = useSession();

  const handleThemeChange = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "night" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setNewTheme(newTheme);
    console.log("Theme changed to: ", newTheme);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-base-300">
      <nav className="navbar mx-auto max-w-[1440px] justify-between">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost">
            {newTheme === "light" ? (
              <Image src={LogoBlack} width={80} height={80} alt="Logo" />
            ) : (
              <Image src={LogoWhite} width={80} height={80} alt="Logo" />
            )}
          </Link>
        </div>
        <label className="swap-rotate swap hidden md:mr-3 md:flex">
          <input type="checkbox" onClick={handleThemeChange} />
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <Link
          className="hidden md:mr-3 md:block"
          target="_blank"
          href="https://github.com/speedbuild98/PSeInt-Documentation"
        >
          <FaGithub className="mx-2 text-2xl" />
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="input input-bordered w-full max-w-[200px] py-2 pl-10 pr-4 md:max-w-[400px]"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch className="text-base" />
          </div>
        </div>
        <div className="dropdown-end dropdown ml-3">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary">
              {sessionData ? (
                <Image
                  fill
                  src={sessionData?.user?.image ?? LogoWhite}
                  alt="profile"
                  className="rounded-full border-2 border-primary"
                />
              ) : (
                <FaUser className="text-4xl" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-200 p-2 shadow"
          >
            {sessionData ? (
              <>
                <span className="mx-auto mb-3 w-full cursor-auto bg-base-100 text-center">
                  ¡Hola {sessionData.user.name}!
                </span>
                <li>
                  <a
                    onClick={
                      sessionData ? () => void signOut() : () => void signIn()
                    }
                  >
                    Cerrar Sesión
                  </a>
                </li>
                <div className="divider"></div>
                <div className="flex flex-row justify-around">
                <button className="h-3 btn btn-circle btn-neutral mx-auto">
                  <label className="swap-rotate swap w-full">
                    <input type="checkbox" onClick={handleThemeChange} />
                    <svg
                      className="swap-on h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      className="swap-off h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </button>
                  <Link
                    className="h-3 btn btn-circle btn-neutral mx-auto text-center flex flex-row items-center justify-start"
                    target="_blank"
                    href="https://github.com/speedbuild98/PSeInt-Documentation"
                  >
                    <FaGithub className="text-xl my-auto mx-auto" /> 
                  </Link>
                  <Link
                    className="h-3 btn btn-circle btn-neutral mx-auto text-center flex flex-row items-center justify-start"
                    target="_blank"
                    href="https://www.linkedin.com/in/lautagallardogg/"
                  >
                    <FaLinkedin className="text-xl my-auto mx-auto" /> 
                  </Link>
                </div>
              </>
            ) : (
              <>
                <li>
                  <a
                    onClick={
                      sessionData ? () => void signOut() : () => void signIn()
                    }
                    className="justify-between"
                  >
                    Iniciar Sesión
                    <span className="badge">Nuevo</span>
                  </a>
                </li>
                <div className="divider"></div>
                <div className="flex flex-row justify-around">
                <button className="h-3 btn btn-circle btn-neutral mx-auto">
                  <label className="swap-rotate swap w-full">
                    <input type="checkbox" onClick={handleThemeChange} />
                    <svg
                      className="swap-on h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      className="swap-off h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </button>
                  <Link
                    className="h-3 btn btn-circle btn-neutral mx-auto text-center flex flex-row items-center justify-start"
                    target="_blank"
                    href="https://github.com/speedbuild98/PSeInt-Documentation"
                  >
                    <FaGithub className="text-xl my-auto mx-auto" /> 
                  </Link>
                  <Link
                    className="h-3 btn btn-circle btn-neutral mx-auto text-center flex flex-row items-center justify-start"
                    target="_blank"
                    href="https://www.linkedin.com/in/lautagallardogg/"
                  >
                    <FaLinkedin className="text-xl my-auto mx-auto" /> 
                  </Link>
                </div>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
