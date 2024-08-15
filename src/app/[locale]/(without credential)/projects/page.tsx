"use client"

import { useEffect } from 'react'
import { smothScroll } from '@/utils/smothScroll'
import { Hero } from '@/components/ProjectPage/Hero'

import { SectionProjects } from '@/components/ProjectPage/SectionProjects'

const ProjectPage = () => {

  useEffect(() => {
    smothScroll()
  }, [])

  return (
    <main className="w-full center flex flex-col">
      <Hero />
      <SectionProjects />
    </main>
  )
}

export default ProjectPage