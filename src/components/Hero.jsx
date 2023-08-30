import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { OrbitControls, Sphere,MeshDistortMaterial} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
height: 5px;
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
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  position: relative;
  
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

const Hero = () =>{
    return (

      <Section>
          <Navbar/>
          <Container>
            <Left>
              <Title>Menuka Deshan</Title>
              <WhatWeDo>
                <Line src=''/>
                <Subtitle>Developer and Designer</Subtitle>
              </WhatWeDo>
              <Desc>I am a versatility and easily adapt to different hats (Beginner level Designer 🎨 and a Developer) . I love exploring new tech stacks.</Desc>
              <Button>Learn More</Button>
            </Left>

            <Right>
              {/*3d MODEL*/}
              <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1,100,200]} scale={2.4}>
                <MeshDistortMaterial color="#7a00d7" attach="material" distort={0.5} speed={2}/>
                </Sphere>
              </Canvas>
              <Img src='../public/img/profile-pic.png'/>
            </Right>
          </Container>
      </Section>

    )
}

export default Hero
