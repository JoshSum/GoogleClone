import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className='flex w-full p-5 justify-between text-lg text-gray-700 '> 
        {/* left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url="data:image/png;base64,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" />
        </div>
      </header>
      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
        src="https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className='h-5 ml-3'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
