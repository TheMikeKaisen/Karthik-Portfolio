import Image from 'next/image'
import IntroPage from './intro/page'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroPage />
    </main>
  )
}
