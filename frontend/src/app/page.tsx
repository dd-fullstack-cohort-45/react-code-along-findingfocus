'use client'

import Image from 'next/image'
import {Button, Card, Navbar} from "flowbite-react";
import React from "react";
import Link from "next/link";
// import {Card, MyCard} from "@/app/components/MyCard";



export default function Home() {
    const [posts, setPosts] = React.useState([])
    const effect = () => {
        fetch('https://ddc-web-student.cnm.edu/apis/')
            .then(response => response.json())
            .then((parsedJson) => {
                setPosts(parsedJson.data)
            })
    }
  console.log(posts)
  React.useEffect(effect, [setPosts])
  return (
      <>
          <div className={"text-9xl text-green-50 flex justify-center pb-8"}>
              HELLO WORLD!!!
          </div>
          <div className="container mx-auto text-white">
              <div className="grid cols-span-1 md:grid-cols-2 gap-5 place-items-center">
                  {posts.map((post, index) => (
                      <Card href="#" className="max-w-sm bg-gradient-to-b from-purple-700 to-purple-900 border-blue-950 py-2" key={index}>
                          <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                              {post.title}
                          </h5>
                          <p className="font-normal text-gray-300 dark:text-gray-400">
                              {post.body}
                          </p>
                      </Card>
                  ))}
              </div>
          </div>
      </>
  )
}
