import { motion, useScroll, useTransform } from "framer-motion"


interface ParagraphProps {
    text: string
    ref: React.MutableRefObject<null>
}

export const Paragraph = ({ text, ref }: ParagraphProps) => {

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0%", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [window.innerHeight, 0])
    return (
        <motion.div
            style={{ y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{duration: .2}}
        >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur in cum expedita, autem voluptatem quae saepe explicabo sequi distinctio suscipit atque corrupti amet impedit nam quasi maiores vel mollitia ad libero optio pariatur ipsa reprehenderit cumque! Labore, recusandae. Doloribus praesentium repellat quo ullam ex odio necessitatibus doloremque ipsa alias repudiandae esse autem eaque quas odit voluptas, qui veritatis eveniet et quidem earum soluta temporibus quos animi distinctio! Itaque, expedita saepe molestias, mollitia provident eos veritatis sint dolorum ipsam veniam dolores! Nobis, rerum, nesciunt similique dolor optio quisquam beatae exercitationem hic labore ab quis deleniti. Praesentium voluptates voluptatibus, beatae excepturi, rerum molestiae incidunt temporibus quas tempora soluta quae obcaecati sint vel dicta tenetur fugit id, ad autem adipisci sapiente. Qui nisi id maxime amet sequi blanditiis pariatur aspernatur commodi? Totam iste, illo aliquam nisi, ipsum dolores a veniam hic recusandae eius assumenda? Sapiente inventore minus in distinctio tenetur similique atque voluptatum suscipit repellendus! Quidem, modi repudiandae. Quas quis accusantium aperiam fugiat doloribus obcaecati eius dolorem, at aut iure veritatis non quibusdam, voluptas qui quia aliquam sint unde id. Officiis qui eligendi vitae ipsa ratione excepturi obcaecati dolorem repudiandae officia, in nobis laborum, architecto provident cumque sequi quos saepe asperiores labore!</p>
        </motion.div>
    )
}
