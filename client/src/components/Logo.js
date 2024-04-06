"use client";
import React from 'react'
import Image from 'next/image';

const Logo = function(){
  return (
    <div className="flex place-content-evenly mt-5 bg-sky=400">
    <img src="./app/logo_swoosh.png" width={450} height={100}></img>
  </div>
  )
}

export default Logo;
