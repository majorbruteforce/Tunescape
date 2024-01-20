import style from "./player.module.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import Head from 'next/head';
export default function Player() {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.00" />
                <title>Stream-Tunescape</title>
            </Head>
            <div className="container bg-gradient-to-r from-black to-gray-900">
                <div className={style.main}>
                    <input className={style.seekerBar} type="range" min="0" max="100" step="0.1" />
                    <div className={style.controllers}>
                        <ShuffleIcon style={{ fontSize: "50px" }} />
                        <SkipPreviousIcon style={{ fontSize: "50px" }} />
                        <PlayCircleIcon style={{ fontSize: "50px" }} />
                        <SkipNextIcon style={{ fontSize: "50px" }} />
                        <ReplayIcon style={{ fontSize: "50px" }} />
                    </div>
                </div>
            </div>

        </>
    )


}