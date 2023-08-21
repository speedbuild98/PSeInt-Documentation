import React from 'react'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900" , "100", "300", "500"],
});

const Layout = ({children, id="", justify=""}) => {
  return (
    <div id={id} className= {`${roboto.className} px-10 flex min-h-screen flex-col items-center ${justify} bg-base-100 md:px-20`}>
      {children}
    </div>
  )
}

export default Layout