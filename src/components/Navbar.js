import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar() {
  return (
   <Container>
    <Content>
        <a><img src="/images/art.jpg"/> </a>
        <NavMenu>
        <a>How it works</a>
        <a>Books</a>
        <a>About</a>
        </NavMenu>
        
    <Navbars>
        <i onclick="darkMode()">
            <IconButton>
                <DarkModeIcon fontSize="large"/>
            </IconButton>

        </i>
        <a>Login</a>
        <Button>Sigh Up</Button>
    </Navbars>
    </Content>
   </Container>
  )
}

export default Navbar
const Container = styled.div`
border:1px solid black;
`
const Content = styled.div`
padding-left:40px;
display:flex;
align-items:center;
text-align:center;
justify-content:space-between;
overfloe:hidden;
height:80px;
top:0;
position:fixed;
width:100%;
z-index:999;

img{
    width:60px;
    height:60px;
    border-radius:50%;
    cursor:pointer;
}

`

const NavMenu= styled.div`
display:flex;
align-items:center;
gap:3rem;
cursor:pointer;
a{
    text-decoration:none;
    color:#f4915c;
    font-size:18px;
}
`

const Navbars= styled.div`
display:flex;
gap:2rem;
align-items:center;
margin:0 40px;
cursor:pointer;
a{
    text-decoration:none;
    color:#f4915c;
    font-size:18px;
}
a:hover{
    coloe:tomato;
}


`

const Button = styled.button`
padding:12px;
border:none;
background-color:teal;
color:#fff;
border-radius:5%;
cursor:pointer;
button:hover{
    background-colorLrgb(10,119,119);
}

`
