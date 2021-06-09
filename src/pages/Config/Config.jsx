import { Button, Card, Col, Row } from "antd";
import { React, useState } from "react";

export default function Config() {
  const [open, setOpen] = useState(false);

  const handleEditOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  function Info() {
    return (
      <>
        <Card title={<h2>Suas Informações:</h2>}>
          <Row gutter={26}>
            <Col span={12}>
              <Card type="inner" title="Nome" bordered={false}>
                Nome
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Empresa" bordered={false}>
                Empresa
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Data de Nascimento" bordered={false}>
                Aniversário
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Ocupação" bordered={false}>
                Ocupação
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="Telefone" bordered={false}>
                Telefone
              </Card>
            </Col>
            <Col span={24}>
              <Card type="inner" title="Email" bordered={false}>
                Email
              </Card>
            </Col>
          </Row>
          <div className="acessarConfigAluno">
            <Button type="primary" size="large" onClick={handleEditOpen}>
              Editar
            </Button>
          </div>
        </Card>
      </>
    );
  }

    if (open)
      return (
        <div className="configUser">
            <div className="btnVoltar2">
              <Button size="large" onClick={handleClose}>
                Voltar
              </Button>
            </div>
        </div>
      );
    else if (!open) {
      return (
          <div className="configUser">
            <Info />
          </div>
      );
    }
  }
