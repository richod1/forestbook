import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
        <h2>About</h2>
        <Content>
            <Aboutright>
                <img src="/images/africa.png"/>
            </Aboutright>
            <Aboutleft>
                <p>
                What is the African forest called?
The Congo Basin makes up one of the most important wilderness areas left on Earth.
 At 500 million acres, it is larger than the state of Alaska and 
stands as the world's second-largest tropical forest.
                </p>
            </Aboutleft>
        </Content>

    </Container>
  )
}

export default About
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:100vh;
width:100%;
h2{
    font-size:40px;
    font-weight:bold;
    margin-bottom:2rem;
}

`
const Content= styled.div`
display:flex;
flex-direction:row;
gap:4rem;
align-items:center;
`

const Aboutright = styled.div`
img{
    width:500px;
}
`

const Aboutleft= styled.p`
p{
    width:500px;
    line-height:32px;
}

`