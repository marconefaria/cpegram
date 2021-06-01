import { React, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Background, Box } from "../../components/ui";

export default function Login() {
  const history = useHistory();
  const [state, setState] = useState({});
  const [remember, setRemember] = useState(false);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleRememberChange(e) {
    setRemember(e.target.checked);
  }

  function redirect(path) {
    history.push(path);
  }

  return (
    <Background>
      <Box>
        <h1>Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Insira um endereço de e-mail!" },
            ]}
          >
            <Input
              prefix={<AiOutlineUser className="site-form-item-icon" />}
              type="user"
              name="user_name"
              placeholder="Usuário"
              size="large"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Insira a senha!" }]}
          >
            <Input
              prefix={<AiOutlineLock className="site-form-item-icon" />}
              type="password"
              name="password"
              placeholder="Senha"
              size="large"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "300px" }}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="login-form-button"
              style={{ width: "300px" }}
              onClick={() => redirect("/cadastro")}
            >
              Cadastre-se
            </Button>
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox value={remember} onChange={handleRememberChange}>
                Lembrar de mim
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Link className="login-form-forgot" to="/esqueciminhasenha">
                Esqueci minha senha
              </Link>
            </Form.Item>
          </div>
        </Form>
      </Box>
    </Background>
  );
}
