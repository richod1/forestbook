import React from 'react'
import styled from 'styled-components'

function Works() {
  return (
    <Container>
        <h2>How it Works</h2>
        <Content>
            <Card>
            <img src="/images/wild1.jpg"/>
            <CardCenter>
                <p>Lorem Ipsum dolor sit amet..</p>
            </CardCenter>
            </Card>
            <Card>
                <img src="/images/wild2.jpg"/>
                <CardCenter>
                    <p>Lorem Ipsup dolor amet...</p>
                </CardCenter>
            </Card>
            <Card>
                <img src="/images/wild3.jpg"/>
                <CardCenter>
                    <p>Lorem Ipsup dolor amet...</p>
                </CardCenter>
            </Card>
        </Content>
    </Container>
  )
}

export default Works
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-width:400px;
margin:auto;
gap:2.5rem;
height:100vh;
`
const Content= styled.div`
display:flex;
flex-direction:row;
gap:4rem;
`


const Card= styled.div`
box-shadow:1px 1px 1px 0px #dadada;
padding:2em;
p{
    align-items:center;
    text-align:center;

}
img{
    width:300px;
    height:300px;
}
`

const CardCenter=styled.div`

`