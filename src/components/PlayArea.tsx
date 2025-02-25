import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Lights from "./Environment/Lights"

extend({ OrbitControls })

export default function PlayArea() {

    const { camera, gl } = useThree()

    return (
        <>  
            {/* @ts-ignore */}
            <orbitControls args={ [ camera, gl.domElement ] } />
            <Lights />
            <mesh castShadow position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh castShadow position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </>
    )
}