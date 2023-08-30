import { OrbitControls, Stage } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Char from './Char'

const WebDesign = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6}>
      <Char/>
    </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default WebDesign