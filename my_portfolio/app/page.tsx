import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/experience'
import ProjectPage from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'
import IntroPage from './intro/page'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4 '>
      <IntroPage />
      <SectionDivider />
      <About />
      <ProjectPage />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
