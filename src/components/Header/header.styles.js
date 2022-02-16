/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #1e2020;
  background: #1e2020;
  padding: 8px 0;
  .search-container {
    width: 100%;
    padding: 0 16px;
  }

  .row {
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;

  @media(max-width: 800px) {
    display: none;
  }
`;
