import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import { styled } from "styled-components"
import Test from "./components/Test"

const Container = styled.div`
  height:100vh;
  scroll-snap-type:y mandatory;
  scroll-behavior:smooth;
  overflow-y: auto;
  scrollbar-width:none;
  color: white;
  background: url("/public/img/Artboard.png");
  background-size: cover;
  background-repeat: no-repeat;
  &::-webkit-scrollbar{
    display:none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      {/*<Works/>*/}  
    </Container>
  )
}

export default App
