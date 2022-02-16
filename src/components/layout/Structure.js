/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;

  @media(max-width: 800px) {
    width: 100%;
  }

  &.row {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  &.row {
    flex-direction: column;
  }
`;

export const Space = styled.div`
  width: 100%;
  padding: 16px 0;

  @media(max-width: 800px) {
    padding: 8px 0;
  }
`;
