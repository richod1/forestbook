import React from 'react'
import styled from 'styled-components'

function Herosec() {
  return (
    <Container>
        <Content>
        <h1>
            save <br/>
            <span>our world</span>
        </h1>
        <p>
        Lorem ipsum dolor sit amet conectrey sit amet constructor sit amet
        construcor adipotin elit, Oquam...
        </p>
        <Button>Grt Started</Button>
        <a><img src="/images/date.png"/> </a>
        </Content>
       
       
    </Container>
  )
}

export default Herosec
const Container= styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin-top:80px;

`
const Content=styled.div`
display:flex;
flex-direction:column;
gap:1.3rem;
h1{
    font-size:62px;
    font-weight:bold;

}
p{
    width:400px;
    line-height:32px;
}
img{
    width:700px;
}

`


const Button = styled.div`
border:none;
background-color:#FF8C74;
width:150px;
padding: .7em;
font-size:17px;
border-radius:8px;
cursor:pointer;
font-family:'Poppins', sans-serif;

`

