"use client"
import ScrollFadeIn from "../ScrollFadeIn/ScrollFadeIn";
import style from "./herotext.module.css"
import { motion } from "framer-motion"

export default function HeroText() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <h1 className={style.music}>
                    Music
                </h1>
                <h6 className={style.byfy}>By You, For You.</h6>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={style.herotext}
            >
                Listen to High Quality music,
                right from shared cloud.

            </motion.p>

            <ScrollFadeIn>
                <h1 className={style.jtc}>Jtc1</h1>

                <p className={style.jtcText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur ipsum aliquid numquam nisi magni deserunt libero velit dolor quaerat impedit, excepturi amet repellendus! aliquid perspiciatis mollitia, cumque facilis accusamus amet eveniet obcaecati eaque quisquam libero in optio odio impedit, molestias aperiam!</p>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={style.container1}
                >
                    <img className={style.bboard} src="https://www.billboard.com/wp-content/uploads/2023/06/midyear-songs-2023-billboard-1548.jpg?w=942&h=623&crop=1" />

                    <img className={style.bboard} src="https://pbs.twimg.com/media/E7zIudSX0AIWNk_?format=png&name=900x900" />

                    <img className={style.bboard} src="https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2023/11/01/rnm-khalasi.jpg" />

                </motion.div>
            </ScrollFadeIn>

            <ScrollFadeIn>
                <h1 className={style.jtc2}>Jtc2</h1>

                <p className={style.jtcText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur ipsum aliquid numquam nisi magni deserunt libero velit dolor quaerat impedit, excepturi amet repellendus! aliquid perspiciatis mollitia, cumque facilis accusamus amet eveniet obcaecati eaque quisquam libero in optio odio impedit, molestias aperiam!</p>


                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={style.container1}
                >
                    <img className={style.bboard} src="https://i.pinimg.com/originals/6f/f9/b8/6ff9b8c83fb13601c08614f7ba68f6b8.jpg" />

                    <img className={style.bboard} src="https://www.rollingstone.com/wp-content/uploads/2023/11/Dua-Lipa-Thumbnail-Blank-1.jpg" />
                </motion.div>
            </ScrollFadeIn>

            <ScrollFadeIn>
                <h1 className={style.jtc3}>Jtc3</h1>

                <p className={style.jtcText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur ipsum aliquid numquam nisi magni deserunt libero velit dolor quaerat impedit, excepturi amet repellendus! aliquid perspiciatis mollitia, cumque facilis accusamus amet eveniet obcaecati eaque quisquam libero in optio odio impedit, molestias aperiam!</p>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={style.container2}
                >
                    <img className={style.bboard} src="https://static.toiimg.com/thumb/imgsize-23456,msid-54541282,width-600,resizemode-4/54541282.jpg" />


                    <img className={style.bboard} src="https://cdn.britannica.com/64/23164-050-A7D2E9D9/Pink-Floyd.jpg" />

                </motion.div>
            </ScrollFadeIn>
        </>
    );
}
