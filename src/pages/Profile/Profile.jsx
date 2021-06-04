import { Avatar, Image } from "antd";
import { React } from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Feed() {
  return (
    <>
        <div style={{ display: "flex", flex:1, marginBottom:"50px", alignItems:"center" }}>
            <Avatar size={128} icon={<AiOutlineUser />} />
            <div style={{ display: "flex", flexDirection:"column", marginLeft:"25px" }}>
                <h1 style={{lineHeight:"0.05"}}>Marcone Faria</h1>
                <h4>marconefaria</h4>
            </div>
        </div>
        <Image.PreviewGroup>
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            /> 
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            /> 
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            /> 
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            /> 
            <Image
                width={275}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
        </Image.PreviewGroup>
    </>
  );
}
