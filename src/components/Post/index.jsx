import React from "react";
import { Card, Avatar } from 'antd';
import { AiOutlineComment, AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";


export default function Post({ image_url, perfil_url, name, description }) {
  const { Meta } = Card;

  return (
    <Card
    style={{ width: "52vw" }}
    cover={
      <img
        alt="example"
        src={ image_url }
      />
    }
    actions={[
      <AiOutlineHeart key="like" />,
      <AiOutlineComment key="edit" />,
      <AiOutlineEllipsis key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={ perfil_url }
      />}
      title={ name }
      description={ description }
    />
  </Card>
  );
}
