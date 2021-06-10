import { Button, Card, Col, Input, message, Row, Upload } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { React, useState } from "react";
import { AiOutlineLoading, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { auth } from "../../firebase";
import firebase from "firebase/app";

export default function Config() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [logoPreview, setLogoPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileProps = {
    name: "file",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    beforeUpload: (file) => {
      setFile(file);
      setLogoPreview(URL.createObjectURL(file))
      return false;
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try{
      firebase
      .storage()
      .ref("users/" + auth.currentUser.uid + "/profile.jpg")
      .put(file)
      .then(function () {
        message.success("Foto de perfil enviada com sucesso");
      })
      .catch((error) => {
        message.error(error.message);
      });
    } catch(error){
      message.error(error);
    }
  }

  const handleEditOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  function EditUser({ children }) {
    return (
    <>
      <Card title={<h2>Editar Suas Informações:</h2>}>
        <Row gutter={26}>
            <Col span={12}>
              <Card type="inner" title="Foto de Perfil" bordered={false}>
                <Upload {...fileProps}>
                  {logoPreview
                    ?
                      <img src={logoPreview} alt="avatar" style={{ width: '100%' }} />
                    :
                    <div>
                      {loading ? <AiOutlineLoading /> : <AiOutlinePlus />}
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  }
                </Upload>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Nome" bordered={false}>
                <Input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Card>
              <Card type="inner" title="Email" bordered={false}>
                <Input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Card>
            </Col>
            </Row>
            {children}
          </Card>
      </>
    );
  }

  function Info({ children }) {
    return (
      <>
        <Card title={<h2>Suas Informações:</h2>}>
        <Row gutter={26}>
            <Col span={12}>
              <Card type="inner" title="Foto de Perfil" bordered={false}>
                <Avatar size={128} icon={<AiOutlineUser />} />
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Nome" bordered={false}>
                Nome
              </Card>
              <Card type="inner" title="Email" bordered={false}>
                Email
              </Card>
            </Col>
            </Row>
            {children}
        </Card>
      </>
    );
  }

    if (open)
      return (
        <EditUser>
          <Button type="primary" size="large" onClick={handleSubmit} style={{marginRight: "15px"}}>
            Salvar
          </Button>
          <Button size="large" onClick={handleClose}>
            Voltar
          </Button>
        </EditUser>
      );
    else if (!open) {
      return (
          <div className="configUser">
            <Info>
              <Button size="large" onClick={handleEditOpen}>
                Editar
              </Button>
            </Info>
            
          </div>
      );
    }
  }
