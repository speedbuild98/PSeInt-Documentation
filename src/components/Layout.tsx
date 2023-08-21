import React from 'react'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900" , "100", "300", "500"],
});

const Layout = ({children}) => {
  return (
    <div className= {`${roboto.className} flex min-h-screen flex-col items-center justify-start bg-base-100`}>
      {children}
    </div>
  )
}

export default Layout