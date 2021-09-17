import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Game } from '../components/Game'

const Home: NextPage = () => {
  const [gameOn, setGameOn] = React.useState<boolean>(false)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Image Word Guesser | Game</title>
        <meta name="description" content="Guess from which words the image was generated" />
      </Head>

      <header className="h-16 w-full sm:h-14 border-b-2">
        <div className="w-full h-full mx-auto px-4 sm:max-w-lg flex flex-row items-center">
          <span className="font-medium text-xl">
            Guesser!
          </span>
        </div>
      </header>

      <main className="px-4 w-full mx-auto mt-4 sm:max-w-lg">
        <Game />
      </main>

    </div>
  )
}

export default Home
