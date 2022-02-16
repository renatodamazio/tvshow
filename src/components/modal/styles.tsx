/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
import styled from "styled-components";

export const ModalBackground = styled.div`
    padding: 10px;
    background: #2a2e34c7;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    background: #fff;
    border-radius: 3px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0px 0px 3px #eee;
    flex-wrap: wrap;
`;

export const ModalHeader = styled.div`
    border-bottom: 1px solid #eee;
    padding: 20px;
    color: #000;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between; 
`;

export const ModalBody = styled.div`
    border-bottom: 1px solid #eee;
    padding: 20px;
    display: flex;
    max-height: 400px;
    overflow: auto;
    width: 100%;
`;

export const ModalFooter = styled.div`
    border-bottom: 1px solid #eee;
    padding: 20px;
    display: flex;
    width: 100%;
`;