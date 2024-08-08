import { dcm, plexus, villaCanaa } from "@/assets"
import { Card } from "./Card"
import { ButtonCustom } from "@/components/ButtonCustom"
import { MaxWidthContainer } from "@/components/MaxWidthContainer"


export const SectionProjects = () => {
    return (
        <MaxWidthContainer>
            <section className=" center gap-16 flex-col pb-20">
                <div className="">
                    <h2 className="text-3xl md:text-5xl uppercase">Últimos projetos</h2>
                </div>
                <div className="flex flex-wrap w-full gap-3 center">
                    <Card
                        href="https://www.agenciaplexus.com.br/"
                        title="Plexus"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum iusto quam. Deleniti id, laboriosam adipisci velit magni cumque nam!"
                        imgProject={plexus}
                    />  <Card
                        href="https://www.pousadavillacanaareservas.com.br/"
                        title="Pousada Villa Canaã"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum iusto quam. Deleniti id, laboriosam adipisci velit magni cumque nam!"
                        imgProject={villaCanaa}
                    />  <Card
                        href="https://dcm-5m53.vercel.app/"
                        title="dcm plus"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum iusto quam. Deleniti id, laboriosam adipisci velit magni cumque nam!"
                        imgProject={dcm}
                    />
                </div>
                <div>
                    <ButtonCustom href="/" text="Veja todos os projetos" />
                </div>
            </section>
        </MaxWidthContainer>
    )
}
