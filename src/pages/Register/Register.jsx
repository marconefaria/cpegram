import { React, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Background, Box } from "../../components/ui";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail, AiOutlineBulb } from "react-icons/ai";
import { db } from "../../firebase";
import firebase from "firebase/app";

export default function Register() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);

    try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(inputs.email, inputs.password)
          .then((cred) => {
            return db.collection("users").doc(cred.user.uid).set({
              username: inputs.username,
              name: inputs.name,
            }).then(() => {
              return message.success("Usuário cadastrado com sucesso!")
            });
          });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Background>
        <Box>
          <h1>Cadastro</h1>
          <Form initialValues={{ remember: true }}>
            <Form.Item
                rules={[{ required: true, message: "Insira um nome de usuário" }]}
            >
              <Input
                prefix={<AiOutlineBulb className="site-form-item-icon" />}
                type="user"
                name="name"
                placeholder="Nome"
                size="large"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              rules={[{ required: true, message: "Insira um nome de usuário" }]}
            >
              <Input
                prefix={<AiOutlineUser className="site-form-item-icon" />}
                type="user"
                name="username"
                placeholder="Usuário"
                size="large"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Insira um endereço de e-mail!" },
              ]}
            >
              <Input
                prefix={<AiOutlineMail className="site-form-item-icon" />}
                type="user"
                name="email"
                placeholder="Email"
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

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirme sua senha!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("As senhas digitadas são diferentes!")
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix={<AiOutlineLock className="site-form-item-icon" />}
                type="password"
                name="passwordConfirm"
                placeholder="Confirmação de senha"
                size="large"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "230px" }}
                onClick={handleSubmit}
              >
                Cadastrar
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
                style={{ width: "230px" }}
              >
                Fazer Login
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Background>
    </>
  );
}
