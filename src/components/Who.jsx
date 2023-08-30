import { 
  OrbitControls, 
  Stage
} from '@react-three/drei';
import Obj from './Obj';
import { Canvas } from '@react-three/fiber'
import React from "react";
import styled from "styled-components";
import Char from './Char'

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
               <Canvas>
    <Stage environment="city" intensity={0.6}>
      <Char/>
    </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
            </Left>

            <Right>
            <Title>It’s not a bug; it’s an undocumented feature. </Title>
              <WhatWeDo>
              </WhatWeDo>
              <Desc></Desc>
              <Subtitle>― Anonymous</Subtitle>
            </Right>
          </Container>
      </Section>

    )
}

export default Who