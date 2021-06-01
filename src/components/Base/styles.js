import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

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
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export const Content = styled.div`
  padding: 0;
`;
