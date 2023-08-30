import React from 'react'
import { styled } from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and(max-width: 768px){
        width: 100%;
    }
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    
    @media only screen and(max-width: 768px){
        width: 100%;
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and(max-width: 768px){
        display: none;
    }
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const Logo = styled.h1`
    height: 40px;
    gap: 20px;
    
    @media only screen and(max-width: 768px){
        display: none;
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const ListItem = styled.li``;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #850096;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: none;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo>DESHAN</Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar