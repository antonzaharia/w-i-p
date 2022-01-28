import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect, useContext } from 'react'

import EthName from '../components/EthName'
import SendForm from '../components/SendForm'
import Post from '../components/Post'
import Price from '../components/Price'

import metadata from '../public/data/metadata.json'

function App() {
  const [toggleSendForm, setToggleSendForm] = useState(false)

  useEffect(() => {
    if (toggleSendForm) {
      document.body.classList.add("send-form")
    } else {
      document.body.classList.remove("send-form")
    }
  }, [toggleSendForm])

  const applyForWip = (
    <a href="#">Apply for $WIP</a>
  )

  const toggleForm = e => {
    e.preventDefault()
    setToggleSendForm(!toggleSendForm)
  }

  return (
    <>
      <Head>
        <title>W-I-P</title>
      </Head>

      <header>
        <h1>W<span>&mdash;</span>I<span>&mdash;</span>P</h1>

        <nav>
          {applyForWip}
          <a href="#" className="primary-action">Connect wallet</a>
        </nav>
      </header>

      <SendForm />

      <main>
        {metadata.map((data, index) => {
          return (
            <Post data={data} key={index} />
          )
        })}
      </main>
    </>
  );
}

export default App;
