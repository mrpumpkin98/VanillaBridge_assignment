import { useState, useEffect, useRef } from "react";
import * as S from "./chat.style";
import { formatTimestamp, sortChatDataByCreatedAt } from "../../../commons";
import { message } from "antd";

type ChatMessage = {
  user_id: 1 | 2;
  user_name: string;
  photo_url: string;
  created_at: string;
  msg: {
    mtype: "text" | "photo";
    content: string;
  };
};

export default function Chat() {
  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openImagePopup = (e: React.MouseEvent<HTMLImageElement>) => {
    const imageUrl = e.currentTarget.src;
    setPopupImage(imageUrl);
  };

  const closeImagePopup = () => {
    setPopupImage(null);
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chatData]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://test.vanillabridge.com/test_data");
        if (response.ok) {
          const data = await response.json();
          const sortedData = sortChatDataByCreatedAt(data);
          setChatData(sortedData);
          console.log(data);
        } else {
          console.error("API 호출에 실패했습니다.");
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    }

    fetchData();
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") {
      return;
    }

    const newMessage: ChatMessage = {
      user_id: 1,
      user_name: "Name",
      photo_url: "Photo URL",
      created_at: new Date().toISOString(),
      msg: {
        mtype: "text",
        content: inputMessage,
      },
    };

    setChatData([...chatData, newMessage]);

    setInputMessage("");
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const copyMessageToClipboard = (message: string) => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "클립보드에 복사",
          style: S.containerStyle,
        });
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  };

  return (
    <S.ChatContainer>
      <S.Header>
        <S.LeftOut rev={undefined} />
        <S.ChatName>주선자</S.ChatName>
      </S.Header>
      <S.Main ref={messagesContainerRef}>
        {contextHolder}
        {chatData.map((message, index) => (
          <div key={index}>
            {message.user_id === 1 ? (
              <S.MyMessage>
                <S.MessageInfo>
                  {formatTimestamp(message.created_at)}
                </S.MessageInfo>
                <S.MyMessageContent
                  onClick={() => copyMessageToClipboard(message.msg.content)}
                >
                  {message.msg.content}
                </S.MyMessageContent>
              </S.MyMessage>
            ) : (
              <S.OtherMessage>
                {popupImage && (
                  <S.ImagePopup onClick={closeImagePopup}>
                    <S.ImagePopupImage src={message.photo_url} />
                  </S.ImagePopup>
                )}
                <S.ProfileContainer>
                  <S.ProfileImage
                    src={message.photo_url}
                    alt={message.user_name}
                    onClick={openImagePopup}
                  />
                  <S.ProfileName>{message.user_name}</S.ProfileName>
                </S.ProfileContainer>
                <S.MessageContainer>
                  <S.MessageContent
                    onClick={() => copyMessageToClipboard(message.msg.content)}
                  >
                    {message.msg.content}
                  </S.MessageContent>
                  <S.MessageInfo>
                    {formatTimestamp(message.created_at)}
                  </S.MessageInfo>
                </S.MessageContainer>
              </S.OtherMessage>
            )}
          </div>
        ))}
      </S.Main>
      <S.Footer>
        <S.PlusCircle rev={undefined} />
        <S.MessageInput
          type="text"
          placeholder="메세지를 입력해주세요"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        {inputMessage.length > 0 && (
          <S.UpCircle rev={undefined} onClick={handleSendMessage} />
        )}
      </S.Footer>
    </S.ChatContainer>
  );
}
