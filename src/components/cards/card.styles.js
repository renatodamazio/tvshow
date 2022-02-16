/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const CardFigure = styled.div`
  img {
    border-radius: 3px;
    border: 2px double #000;
    box-shadow: 0px 0px 0px #000;
    transition: 0.4s ease-in-out;
  }

  &.small {
    img {
      max-width: 100px;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
      border-color: #fff;
      box-shadow: 0px 0px 4px #5090fd;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding: 16px;
  background: #1e2020;
  border-radius: 8px;
  border: 1px solid #eee;
  color: #fff;
  transition: .400s ease-in-out;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0px 0px 7px #ffff;
  }

  @media(max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
