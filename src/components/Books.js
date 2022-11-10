import React from 'react'
import styled from 'styled-components'

function Books() {
  return (
   <Container>
    <h2>Book A Session</h2>
    <Content>
        <LeftBook>
            <img src="/images/boy.png"/>
        </LeftBook>
        <RightBook>
        <form>
            <label for="">Name</label>
            <input type="text" placeholder="Enter Name"/> <br/>
            <label>Email</label>
             <input type="text" placeholder="Enter Email"/> <br/>
             <label for="">Messages</label>
             <input type="text" placeholder="Enter Message"/> <br/>
             <button>BOOK</button>
        </form>
        </RightBook>
    </Content>

   </Container>
  )
}

export default Books
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
height:100vh;
`
const Content= styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap:8rem;
`

const LeftBook= styled.div`

img{
    width:500px;
    opacity:0.8;
}
`
const RightBook=styled.div`
background:#eee;
form{
    width:400px;
    padding:30px;
}
label{
    color:rgb(47,47,47);
}
input{
    width:100%;
    padding:12px 20px;
    margin:8px 0;
    box-sizing:border-box;
    outline:1px solid #f8eae7;
}
button{
    margin-top:20px;
    border:none;
    backround-color:#FF8C74;
    color:#fff;
    width:150px;
    padding: .7em;
    font-size:17px;
    border-radius:8px;
    cursor:pointer;
    font-family:'Poppins' ,sans-sherif;
}
`