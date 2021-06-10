import { React, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { AiOutlineUpload } from "react-icons/ai";
import { Box } from "../../components";
import { auth, db } from "../../firebase";
import firebase from "firebase/app";
var posts = db.collection("posts");
let key = posts.doc().id;

export default function NewPost() {
   const [description, setDescription] = useState();
   const [file, setFile] = useState();

   const fileProps = {
    name: "file",
    beforeUpload: (file) => {
      setFile(file);
      return false;
    },
  };

   async function handleSubmit(e) {
     e.preventDefault();

     try{
      await firebase
              .storage()
              .ref("posts/" + auth.currentUser.uid + "/" + key)
              .put(file)
              .then(function () {
                message.success("Foto enviada com sucesso");
              })
              .catch((error) => {
                message.success(error.message);
              });
            return db.collection("posts").doc(auth.currentUser.uid).collection("post").doc(key).set({
              id: key,
              description: description,
            });
     } catch(error){
        message.error(error);
     }
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
                listType="picture"
                {...fileProps}
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
