import Player from "@/components/Player/Player"
import style from "./stream.module.css"
import PlayScreen from "@/components/PlayScreen/PlayScreen"
export default function Page() {
    return (
        <>
            <PlayScreen />
            <Player />
        </>
    )
}