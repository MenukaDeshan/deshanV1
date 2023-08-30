
import React from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Test = () => {
  return (
    <Container>
        <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
            
        </Canvas>
    </Container>
  )
}

export default Test