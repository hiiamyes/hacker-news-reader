import styled from "styled-components";

import { colorSecondary } from "src/styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colorSecondary};
`;

export const InitLoader = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
