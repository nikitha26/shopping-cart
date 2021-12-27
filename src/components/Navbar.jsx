import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';

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
  cursor: pointer;
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
  border:none;
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
  display:flex;
  align-items:center;
  justify-content:flex-end;
`
const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left:25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                      <Input placeholder='Search'/>
                      <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Pretty E Commerece</Logo></Center>
                <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                  </Badge>
                </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

