import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Lights from "./components/Environment/Lights"
import PlayArea from "./components/Console/PlayArea"

extend({ OrbitControls })

export default function Game() {

    const { camera, gl } = useThree()

    return (
        <>  
            {/* @ts-ignore */}
            <orbitControls args={ [ camera, gl.domElement ] } />
            <Lights />
            <PlayArea />
        </>
    )
}