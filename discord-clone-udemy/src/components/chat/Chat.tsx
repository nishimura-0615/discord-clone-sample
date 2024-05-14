import React,  { useEffect, useState } from 'react'
import"./Chat.scss";
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../../app/hooks";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from "../../firebase";
import useSubCollection from '../../hooks/useSubCollection';



const Chat = ()  => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const [inputText, setInputText] = useState<string>("");
  const { subDocuments: messages } = useSubCollection("channels","messages")
  // console.log(channelName)




  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //channlesの中のmessageコレクションの中に新しくデータを入れる。
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      }
    );
    console.log(docRef);
    setInputText("");
  };

  return(
    <div className="chat">
      <ChatHeader channelName={channelName}/>

      <div className="chatMessages">
        {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message.message}
          timestamp={message.timestamp}
          user={message.user}
        />
        ))}
      </div>

      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#メッセージ送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
            disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
