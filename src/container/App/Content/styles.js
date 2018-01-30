import styled from "styled-components";

import {
  colorSecondary,
  colorTextPrimary,
  colorTextSecondary
} from "src/styles/colors";

import { mediaDesktop } from "src/styles/medias";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${colorSecondary};

  ${mediaDesktop} {
    width: 50%;
    margin: auto;
  }
`;

export const LoadMoreLoader = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Story = styled.div`
  display: flex;
`;

export const Index = styled.div`
  width: 3rem;
  color: ${colorTextSecondary};
  text-align: right;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
`;

export const StoryContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const Title = styled.a`
  color: ${colorTextPrimary};
  text-decoration: none;
`;
export const ByTime = styled.span`
  color: ${colorTextSecondary};
`;
