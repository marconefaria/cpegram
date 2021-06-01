import React from "react";
import styled from "styled-components/macro";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <Loading.Wrapper>
      <AiOutlineLoading3Quarters color="white" size="40px" />
    </Loading.Wrapper>
  );
}

Loading.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  & > svg {
    animation: spin ease-in-out 0.8s infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
