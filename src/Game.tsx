import { OrbitControls } from '@react-three/drei'
import Lights from "./components/Environment/Lights"
import PlayArea from "./components/Console/PlayArea"

export default function Game() {

    return (
        <>  
            <OrbitControls />
            <Lights />
            <PlayArea />
        </>
    )
}