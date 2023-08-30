import React from 'react'
import {
    RenderTexture ,
    PerspectiveCamera,
    } from '@react-three/drei';
    
const cube = () => {
  return (
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault position={[0,0,5]}/>
                        <color attach="background" args={["pink"]}/>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
  )
}

export default cube