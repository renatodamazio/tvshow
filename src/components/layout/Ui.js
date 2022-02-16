/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Button = styled.button`
  padding: 16px;
  color: #fff;
  width: auto;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  background: rgb(26, 92, 255);
  box-shadow: 0 10px 20px -10px rgba(26, 92, 255, 0.5);
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.default {
    background: none;
  }

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(26, 92, 255, 0.2);
    transform: translateY(-5px);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 16px;
  background: #fff;
  border-radius: 3px;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:focus {
    border-color: 1px solid rgb(26, 92, 255);
    box-shadow: 0 10px 20px 0px rgba(26, 92, 255, 0.5)
  }
`;
