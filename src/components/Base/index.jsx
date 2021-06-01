import { React, useState } from "react";
import { Layout, Menu } from 'antd';
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineUser, AiOutlineVideoCamera, AiOutlineUpload } from "react-icons/ai";
import { Wrapper, Content } from "./styles";
import Logo from "../../images/logo.png";
import Icone from "../../images/logo-ico.png";

export default function Back({ children }) {
  const { Header, Sider } = Layout;
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((isOpen) => !isOpen);
  }

  return (
    <Wrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={open} style={{ height: "100vh" }}>
        {!open ? <img src={Logo} alt="logo CPE" className="logo" /> : <img src={Icone} alt="logo CPE" className="icone" />}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<AiOutlineUser />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<AiOutlineVideoCamera />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<AiOutlineUpload />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: "12px" }} >
            {open ? <AiOutlineMenuUnfold className="trigger" onClick={toggleOpen} color="black"/> : <AiOutlineMenuFold className="trigger" onClick={toggleOpen} />}
          </Header>
          <Content>
            { children }
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
    );
  }
