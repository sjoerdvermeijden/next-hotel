import React from "react";

import styled from "styled-components";

import { HeaderWrapper } from "./Style";

import Wrap from "../Wrap/Wrap";

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--darkgray);
`;

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <StyledLink href="/">
            <h1>React Portfolio</h1>
          </StyledLink>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header;
