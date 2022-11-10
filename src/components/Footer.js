import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <p>&copy; Copyright 2022</p>

    </Container>
  )
}

export default Footer
const Container= styled.div`
height:50px;
background-color:#FF8C74;
align-items:center;
p{
    text-align:center;
    color:#fff;
}
`