export default function PlayArea(){

    const field_size = { x: 10, y: 20 , z: 1}

    return (
        <>
            <mesh castShadow position={ [(field_size.x/2),0,0] } rotation={ [0,(- Math.PI * 0.5),(- Math.PI * 0.5)] } scale={ [(field_size.x/4), (field_size.y), (field_size.z/2)] }>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh castShadow position={ [-(field_size.x/2),0,0] } rotation={ [0,(- Math.PI * 0.5),(- Math.PI * 0.5)] } scale={ [(field_size.x/4), (field_size.y), (field_size.z/2)] }>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh castShadow position={ [0,0,(field_size.y/2)] } rotation={ [0,0,(- Math.PI * 0.5)] } scale={ [(field_size.x/4), (field_size.y), (field_size.z/2)] }>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh castShadow position={ [0,0,-(field_size.y/2)] } rotation={ [0,0,(- Math.PI * 0.5)] } scale={ [(field_size.x/4), (field_size.y), (field_size.z/2)] }>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh receiveShadow position={[0,-1,0]} rotation-x={ - Math.PI * 0.5 } scale={ [field_size.x, field_size.y, (field_size.z/2)] }>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color="greenyellow" />
            </mesh>
            
        </>
    )
}