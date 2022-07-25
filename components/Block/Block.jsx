import React from "react";

import { BlockWrapper } from "./Style";

function Block({ children }) {
  return (
    <>
      <BlockWrapper>{children}</BlockWrapper>
    </>
  );
}

export default Block;
