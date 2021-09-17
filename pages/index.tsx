import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Game } from '../components/Game'

const Home: NextPage = () => {
  const [gameOn, setGameOn] = React.useState<boolean>(false)

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Image Word Guesser</title>
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
        {!gameOn ? (
          <div className="w-full flex flex-col justify-center items-center">

            <p className="text-lg mb-3">Guess from which words the image was generated!</p>
            <button
              onClick={() => setGameOn(true)}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              Start Game
            </button>
          </div>
        )
          : <Game />
        }

      </main>

    </div>
  )
}

export default Home
