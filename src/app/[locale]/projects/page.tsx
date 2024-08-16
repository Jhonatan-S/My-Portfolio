import { locale } from "@/@types/locale"
import ProjectPage from "@/components/ProjectPage"
import { Metadata } from "next"



export async function generateMetadata({ params: { locale } }: locale): Promise<Metadata> {

  let title;
  let description;

  switch (locale) {

    case "pt":
      title = "Projetos"
      description = ""
      break

    case "en":
      title = "Projects"
      description = ""
      break
  }

  return {
    title: title,
    description: description
  }
}

const page = () => {

  return (
    <ProjectPage />
  )
}

export default page