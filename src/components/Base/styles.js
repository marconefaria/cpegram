import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;

  .trigger {
    font-size: 32px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
    color: black;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 58px;
    margin: 16px;
  }

  .icone {
    height: 43px;
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export const Content = styled.div`
  padding: 40px 15vw;
`;
