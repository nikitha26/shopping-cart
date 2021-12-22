import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons';

const Container = styled.div`
  height:60px;
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
`;
const Language = styled.span`
  font-size:14px;
  cursor: pointer;;
`
const SearchContainer = styled.div`
   border:1px solid grey;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`;
const Input = styled.input`
  border-radius:10px;
`
const Logo = styled.h1`
  font-weight:bold;
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Center = styled.div`
  flex:1;
  text-align:center;
`

const Right = styled.div`
  flex:1;
`


function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                      <Input placeholder='Search'/>
                      <Search/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Pretty E Commerece</Logo></Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

