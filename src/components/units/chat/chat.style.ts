import {
  LeftOutlined,
  PlusCircleOutlined,
  UpCircleFilled,
} from "@ant-design/icons";
import styled from "@emotion/styled";

type ContainerStyle = {
  position: "static" | "relative" | "absolute" | "fixed";
  top: string;
  right: string;
  zIndex: number;
};

export const ChatContainer = styled.div`
  width: 360px;
  height: 720px;
  background-color: #fff9ef;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  background-color: #faf0e1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

export const Footer = styled.div`
  background-color: #faf0e1;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyMessage = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const OtherMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const MessageContent = styled.div`
  background-color: #fff;
  margin-left: 30px;
  margin-top: 5px;
  padding: 10px 15px;
  border-radius: 0px 12px 12px 12px;
  max-width: 70%;
  font-size: 13px;
  margin-right: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MyMessageContent = styled.div`
  background-color: #03006e;
  color: #fff;
  padding: 10px 15px;
  border-radius: 12px 0px 12px 12px;
  max-width: 70%;
  font-size: 13px;
  margin-left: 5px;
  word-wrap: break-word;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MessageInfo = styled.div`
  font-size: 11px;
  color: #999;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 25px;
  border-radius: 100px;
  margin-right: 5px;
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-size: 13px;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const DateSeparator = styled.div``;

export const MessageInput = styled.input`
  width: 270px;
  height: 34px;
  border: none;
  background-color: #fff;
  border: 1px solid #c5c5c5;
  border-radius: 15px;
  padding: 0px 55px 0px 15px;
  outline: none;
`;

export const PlusButton = styled.div``;

export const MessageButton = styled.button`
  right: 20%;
  position: absolute;
`;

export const PlusCircle = styled(PlusCircleOutlined)`
  font-size: 28px;
  margin-right: 10px;
  color: #c5c5c5;
  cursor: pointer;
`;

export const UpCircle = styled(UpCircleFilled)`
  font-size: 25px;
  right: 12%;
  position: absolute;
  color: #03006e;
`;

export const containerStyle: ContainerStyle = {
  position: "fixed",
  top: "17vh",
  right: "41%",
  zIndex: 9999,
};

export const ImagePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ImagePopupImage = styled.img`
  max-width: 60%;
  max-height: 60%;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;

export const LeftOut = styled(LeftOutlined)`
  text-align: left;
  width: 100%;
  padding: 0px 20px;
  cursor: pointer;
`;

export const ChatName = styled.p`
  font-size: 14px;
  position: absolute;
`;
