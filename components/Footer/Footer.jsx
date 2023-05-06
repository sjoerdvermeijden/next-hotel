import React from "react";
import styled from "styled-components";

import { FooterWrapper } from "./Style";

export const StyledLink = styled.a`
  display: inline-block;
  list-style: none;
  color: white;
  font-weight: bold;
`;

import Wrap from "../Wrap/Wrap";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Wrap>
          <p>
            Zie project in Github{" "}
            <StyledLink
              href="https://github.com/sjoerdvermeijden/next-hotel"
              target="_blank"
            >
              hier
            </StyledLink>{" "}
            | Sjoerd Vermeijden
          </p>
        </Wrap>
      </FooterWrapper>
    </>
  );
}

export default Footer;
