import React from "react";

import { Wrapper } from "./Style";

function Wrap({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

export default Wrap;
