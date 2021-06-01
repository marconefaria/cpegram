import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Arrow = styled.a`
  color: #707070;
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2;
  align-self: flex-start;
`;

export default function Back({ message, to }) {
  const history = useHistory();
  return (
    <Arrow onClick={() => history.push(to)}>
      <AiOutlineArrowLeft size={20} />
      {message || "Voltar"}
    </Arrow>
  );
}
