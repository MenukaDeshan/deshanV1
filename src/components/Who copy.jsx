import { 
  OrbitControls, 
} from '@react-three/drei';
import Obj from './Obj';
import { Canvas } from '@react-three/fiber'
import React from "react";
import styled from "styled-components";


const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
`

const Line = styled.img`
`

const Subtitle = styled.h2`
  color: #69005e;
`
const Desc = styled.p`
  font-size: 24px;
`
const Button = styled.button`
  background-color: #d900a3;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  display: flex;
 flex-direction: column;
 justify-content: center;
  gap: 20px;
  
`
const Img = styled.img`
  border-radius: 150%;
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`

const Who = () =>{
    return (

      <Section>
          <Container>
            <Left>
               {/*3d MODEL*/}
               <Canvas camera={{fov:25, position: [5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Obj/>
              </Canvas>
            </Left>

            <Right>
            <Title>Think Outside the Square Space</Title>
              <WhatWeDo>
                <Line src=''/>
                <Subtitle>Who are We</Subtitle>
              </WhatWeDo>
              <Desc>We Enjoy Creating delightful, Human-centered experiences</Desc>
              <Button>See Our works</Button>
            </Right>
          </Container>
      </Section>

    )
}

export default Who