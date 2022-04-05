import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="container">
      <Title>to do app</Title>
    </div>
  )
}

const Title = styled.h1 `
  text-align: center;
  text-transform: capitalize;
`

export default Header;
