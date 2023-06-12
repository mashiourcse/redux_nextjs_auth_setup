"use client";

import LogIn from "./log-in";

import React from 'react'
import { useAppSelector } from "@/redux/store";
export default function Home() {

  const username = useAppSelector( (state)=> state.authReducer.value.username);
  const isModerator = useAppSelector( (state)=> state.authReducer.value.isModerator);
  const isAuth = useAppSelector( (state)=> state.authReducer.value.isAuth);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn/>

      <h1>Username: {username}</h1>
     
      {
        isAuth && isModerator ? <h3>Hi I am moderator</h3> : ""
      }
    </main>
  )
}
