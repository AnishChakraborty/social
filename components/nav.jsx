"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Nav = () => {
  return (
    <div className='h-16 w-full bg-black flex'>
        <Link href="/">
        <div className='h-10 w-10 bg-white rounded-full mx-5 my-3'></div>
        </Link>
    </div>
  )
}
