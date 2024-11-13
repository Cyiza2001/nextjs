"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";
export default function signUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignUp = () => {};
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
        <div className=" bg-pink-600 h-96 w-80 px-3 flex flex-col gap-2">
        <h1 className="flex justify-center items-center mt-2 text-2xl font-bold mb-1">SIGN UP</h1>
        <hr  className="mb-4"/>
      
      <label htmlFor="username">username</label>
      <input
      className="p-1 rounded-xl"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
        placeholder="username"
      />

      <label htmlFor="email">email</label>
      <input
        className="p-1 rounded-xl"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
          className="p-1 rounded-xl"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      />

      <div className="flex flex-col justify-center items-center gap-2 ">
      <button className="p-2 bg-white rounded-xl w-24 mt-3 text-pink-600 font-bold" onClick={onSignUp}  >SIGN UP</button>
      <Link href="/login">Visit login page</Link>
      </div>

      

        </div>
      
    </div>
  );
}
