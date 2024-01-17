import React from "react"
import MenuDropDown from "../components/MenuDropDown"

import Navbar from "../components/Navbar"

import Dashboard from "../components/Dashboard"

export default function Home() {

  return (
   <div className=" h-screen max-w-full w-full">
    
    <Navbar/>
   <MenuDropDown/>
   <Dashboard/>
   </div>

   
  )
}