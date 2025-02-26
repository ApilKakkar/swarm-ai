import { PivotControls } from "@react-three/drei"
import { Physics, RigidBody ,RapierRigidBody } from '@react-three/rapier'
import { useRef } from "react"

export default function PlayArea(){

    const field_size = { x: 15, y: 1 , z: 30}
    const offset = 0.5
    const bot_size = { x: 1, y: 1, z: 1}
    const bot = useRef<RapierRigidBody>(null);
    const bot2 = useRef<RapierRigidBody>(null);
    const bot3 = useRef<RapierRigidBody>(null);

    const move_bot = () => {
        console.log("Bot clicked");
        if (bot.current && bot2.current && bot3.current) {
            // A one-off "push"
            // bot.current.applyImpulse({ x: 2, y: 10, z: 0 }, true);
      
            // A continuous force
            bot.current.addForce({ x: 2, y: 2, z: 1 }, true);
            bot2.current.addForce({ x: 2, y: 0, z: 1 }, true);
            bot3.current.addForce({ x: 2, y: 0, z: -1 }, true);
      
            // A one-off torque rotation
            // bot.current.applyTorqueImpulse({ x: 0, y: 10, z: 0 }, true);
      
            // A continuous torque
            bot.current.addTorque({ x: 0, y: 10, z: 0 }, true);
            bot2.current.addTorque({ x: 0, y: -10, z: 0 }, true);
            bot3.current.addTorque({ x: 0, y: 0, z: 10 }, true);
          }
    }

    return (
        <>
            <Physics debug>
                {/* <PivotControls depthTest={false} scale={2}>
                </PivotControls> */}
                <RigidBody type="dynamic" ref={bot} colliders="ball" restitution={1} friction={10}>
                    <mesh castShadow position={ [ 0, (bot_size.y*5), 0 ] } onClick={ move_bot }>
                        <sphereGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </RigidBody>

                <RigidBody type="dynamic" ref={bot2} colliders="ball" restitution={1} friction={10}>
                    <mesh castShadow position={ [ -5, (bot_size.y*5), 0 ] } onClick={ move_bot }>
                        <sphereGeometry />
                        <meshStandardMaterial color="green" />
                    </mesh>
                </RigidBody>

                <RigidBody type="dynamic" ref={bot3} colliders="ball" restitution={1} friction={10}>
                    <mesh castShadow position={ [ 0, (bot_size.y*5), 5 ] } onClick={ move_bot }>
                        <sphereGeometry />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                </RigidBody>

                <RigidBody type="fixed" restitution={0.1} friction={0}>
                {/* ground */}
                    <mesh receiveShadow position={[0,0,0]}  scale={ [field_size.x, field_size.y, field_size.z] }>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color="greenyellow" />
                    </mesh>
                {/* walls */}
                    <mesh castShadow position={ [-(field_size.x/2),(field_size.y - offset),0] } scale={ [field_size.y,(field_size.y*2),(field_size.z)] }>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                    <mesh castShadow position={ [(field_size.x/2),(field_size.y - offset),0] } scale={ [field_size.y,(field_size.y*2),(field_size.z)] }>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                    <mesh castShadow position={ [0,(field_size.y - offset),(field_size.z/2)] } scale={ [(field_size.x+(2*offset)),(field_size.y*2),(field_size.y)] }>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                    <mesh castShadow position={ [0,(field_size.y - offset),-(field_size.z/2)] } scale={ [(field_size.x+(2*offset)),(field_size.y*2),(field_size.y)] }>
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color="mediumpurple" />
                    </mesh>
                </RigidBody>

            </Physics>

        </>
    )
}