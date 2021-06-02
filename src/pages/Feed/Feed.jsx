import { React } from "react";
import { Card, Avatar } from 'antd';
import { AiOutlineComment, AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";

export default function Feed() {
  const { Meta } = Card;

  return (
  <Card
    style={{ width: "52vw" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <AiOutlineHeart key="like" />,
      <AiOutlineComment key="edit" />,
      <AiOutlineEllipsis key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  );
}
