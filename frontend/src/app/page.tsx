'use client'

import Image from 'next/image'
import {Button, Navbar} from "flowbite-react";
import React from "react";
import Link from "next/link";
import {Card, MyCard} from "@/app/components/MyCard";


export default function Home() {
  return (
      <>
          <div className={"text-9xl text-green-50 flex justify-center pb-8"}>
              HELLO WORLD!!!
          </div>
          <div className="container mx-auto text-white">
              <div className="grid cols-span-1 md:grid-cols-2 gap-5 place-items-center">
                  <MyCard/>
                  <MyCard/>
                  <MyCard/>
                  <MyCard/>
                  <MyCard/>
                  <MyCard/>
              </div>
          </div>
      </>
  )
}
