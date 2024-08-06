import Image from 'next/image'
import IntroPage from './intro/page'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import ProjectPage from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <IntroPage />
      <SectionDivider />
      <About />
      <ProjectPage />
      <Skills />
    </main>
  )
}
