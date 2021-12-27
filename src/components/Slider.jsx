import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@material-ui/icons';
const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  background-color:coral;
  position:relative;
  top:15px;
`;
const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color:#fff7f7;
  border-radius:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props => props.direction === 'left' && '10px'};
  right:${props => props.direction === 'right' && '10px'};
  cursor:pointer;
  opacity:0.5;
  margin:auto;
`
const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
              <ArrowLeftOutlined/>
            </Arrow>
            <Arrow direction='right'>
              <ArrowRightOutlined/>
            </Arrow>   
        </Container>
    )
}

export default Slider
