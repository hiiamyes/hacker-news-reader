import styled from "styled-components";

import { headerHeight } from "src/styles/dimension";
import { colorPrimary, colorTextPrimary } from "src/styles/colors";

export const Container = styled.div`
  display: flex;
  height: ${headerHeight};
  align-items: center;
  justify-content: center;
  background: ${colorPrimary};
  color: ${colorTextPrimary};

  h2 {
    margin: 0;
  }
`;
