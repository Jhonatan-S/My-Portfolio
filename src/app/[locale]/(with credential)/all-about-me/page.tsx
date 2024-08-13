"use client"

import withAuth from "@/hooks/withAuth"

const AboutPage = () => {

  return (
    <main className="w-full h-screen center bg-black text-primary-color uppercase">
      <span className="text-5xl">Página em desenvolvimento...</span>
    </main>
  )
}

export default withAuth(AboutPage)