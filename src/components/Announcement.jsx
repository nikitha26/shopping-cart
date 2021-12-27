//import { styled } from '@material-ui/styles'
import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
  height:30px;
  background-color:teal;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:14px;
  font-weight:500;
`
const Announcement = () => {
    return (
        <Container>
            Super Deal ! Free Shipping On Order 1000 Above
        </Container>
    )
}

export default Announcement
