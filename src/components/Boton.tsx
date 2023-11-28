"use client"

import {signIn, useSession, signOut} from 'next-auth/react'
import Link from "next/link"

function Boton(){
  const {data: session} = useSession()
  console.log(session)

    return(
      <nav>
         
   {session?.user ? (
    <div>
    <button onClick={() => signOut()}>
   Sign out
  </button>
  <Link href="/dashboard">
  Go to Dash
 </Link>

 <p>NOMBRE Y APELLIDO: {session.user.name}</p>  <br />
 <p>MAIL:{session.user.email} </p><br />
 <p>FOTO DE PERFIL:</p> <img src= {session.user.image} alt="" />
 
 </div>
   ):(
    <button onClick={() => signIn()}>
   Sign In
  </button>
   )}
   
  </nav>
    )
}

export default Boton