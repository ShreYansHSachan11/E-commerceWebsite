import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";
import ChatInput from "../../components/chat/ChatInput";
import ChatLog from "../../components/chat/ChatLog";
import UserCard from "../../components/chat/UserCard";
import '../../App.css'

const serverURL = import.meta.env.VITE_SERVER_URL;
const socket = io.connect(serverURL);

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const [searchParams] = useSearchParams();
  const { state } = useLocation();

  const name = state ? state.name : "Guest";
  const room = searchParams.get("room");

  useEffect(() => {
    const joinRoom = () => {
      console.log(`Entering room ${room}`);
      const joinText = `${name} joined the room.`;
      const joinTextId = "joinRoomTextId";
      const data = { id: joinTextId, msg: joinText, room: room, name: name };
      socket.emit("join_room", data);
    };

    joinRoom();

    socket.on("receive_message", (data) => {
      setMessageList((prev) => [data, ...prev]);
    });

    socket.on("user_joined", (data) => {
      setMessageList((prev) => [data, ...prev]);
    });

    // Retrieve chat messages from local storage
    const savedMessages = localStorage.getItem(`chatMessages_${room}`);
    if (savedMessages) {
      setMessageList(JSON.parse(savedMessages));
    }

    return () => {
      // Cleanup socket event listeners
      socket.off("receive_message");
      socket.off("user_joined");
    };
  }, [room, name]);

  const sendMessage = () => {
    const emptyOrWhiteSpaceRegex = /^(?![\s\S])|^( {1,})$/;

    if (emptyOrWhiteSpaceRegex.test(message)) return;
    const objMessage = { id: socket.id, msg: message, room: room, name: name };

    socket.emit("send_message", objMessage);
    setMessageList((prev) => [objMessage, ...prev]);
    setMessage("");

    // Update local storage with new message
    localStorage.setItem(`chatMessages_${room}`, JSON.stringify([...messageList, objMessage]));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const handleOnChange = (event) => setMessage(event.target.value);

  return (
    <>
      <UserCard name={name} />
      <div className="chatRoom">
        <div className="chatContainer">
          <div className="roomNumber">{`Room: ${room}`}</div>
          <ChatLog messageList={messageList} id={socket.id} />
          <div id="separationLine"></div>
          <ChatInput message={message} handleKeyDown={handleKeyDown} handleOnChange={handleOnChange} sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
};

export default Chat;
