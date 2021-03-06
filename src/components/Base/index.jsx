import { React, useState } from "react";
import { Layout, Menu } from 'antd';
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineUser, AiOutlineHome, AiOutlineExport, AiOutlineSetting, AiOutlinePlusSquare } from "react-icons/ai";
import { Wrapper, Content } from "./styles";
import Logo from "../../images/logo.png";
import Icone from "../../images/logo-ico.png";
import { useHistory } from "react-router";

export default function Back({ children }) {
  const { Header, Sider } = Layout;
  const [open, setOpen] = useState(false);
  const history = useHistory();

  function toggleOpen() {
    setOpen((isOpen) => !isOpen);
  }

  function redirect(path) {
    history.push(path);
  }

  return (
    <Wrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={open}>
        {!open ? <img src={Logo} alt="logo CPE" className="logo" /> : <img src={Icone} alt="logo CPE" className="icone" />}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="" icon={<AiOutlineHome />} onClick={() => redirect("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="perfil" icon={<AiOutlineUser />} onClick={() => redirect("/perfil")}>
              Meu Perfil
            </Menu.Item>
            <Menu.Item key="configuracoes" icon={<AiOutlineSetting />} onClick={() => redirect("/configuracoes")}>
              Minhas Informações
            </Menu.Item>
            <Menu.Item key="post" icon={<AiOutlinePlusSquare />} onClick={() => redirect("/novopost")}>
              Criar um Post
            </Menu.Item>
            <Menu.Item key="sair" icon={<AiOutlineExport />}>
              Sair
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
