{/* <img src="https://publish.one37pm.net/wp-content/uploads/2021/08/j-cole-mobile.jpg?resize=720%2C780" alt="" /> */ }
import style from "./playscreen.module.css"
import StreamCard from "../StreamCard/StreamCard"
let arr = [1,2,3,4,5,6,7]

export default function PlayScreen() {
    return (
        <div className={`${style.playscreen}`}>
            <div className={`${style.imageAndCardsContainer} flex`}>
                <div>
                    <img className={`${style.cardHolder}`} src="https://publish.one37pm.net/wp-content/uploads/2021/08/j-cole-mobile.jpg?resize=720%2C780" alt="" />
                    <h1 className={`${style.songName}`}> Work Out</h1>
                    <p className={`${style.artist} `}>J.Cole</p>
                </div>

                <div className={style.container}>
                    {arr.map(e=>(
                        <>
                        <StreamCard/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}