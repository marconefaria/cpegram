import { React, useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import { AiOutlineUpload } from "react-icons/ai";
import { Box } from "../../components";

export default function NewPost() {
   const [description, setDescription] = useState();

   function handleSubmit(e) {
     e.preventDefault();
   }

  return (
  <div style={{alignItems: "center"}}>
  <Box style={{width: "200px"}}>
    <h1>Novo Post</h1>
        <Form
          name="new_post"
          className="post-form"
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Insira uma descrição para o post!" },
            ]}
          >
            <Input
              type="text"
              name="description"
              placeholder="Descrição"
              size="large"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="photo"
            rules={[{ required: true, message: "Insira uma foto!" }]}
          >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                >
                <Button icon={<AiOutlineUpload />}>Upload</Button>
              </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "300px" }}
              onClick={handleSubmit}
            >
              Criar Post
            </Button>
          </Form.Item>
        </Form>
    </Box>
    </div>
  );
}
