import { React, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Form, Input, Checkbox, Button } from "antd";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { Background, Box } from "../../components/ui";

export default function Login() {
  const history = useHistory();
  const [remember, setRemember] = useState(false);
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(userName, password);
  }

  useEffect(() => {
    if (user && !error) {
      console.log(auth);
      history.push("/");
    }
    //eslint-disable-next-line
  }, [user, error]);

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
              { required: true, message: "Insira um endereço de e-mail ou username!" },
            ]}
          >
            <Input
              prefix={<AiOutlineUser className="site-form-item-icon" />}
              type="user"
              name="user_name"
              placeholder="Usuário ou Email"
              size="large"
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
