import { useEffect,useState } from 'react';
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase"
import { useAppSelector } from '../app/hooks';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}
  //useEffect:チャンネル名とメッセージを格納。
  //useState:メッセージの状態管理
const useSubCollection = (
  collectionName: string,
  subCollectionName: string
  ) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName,
    );

    //昇順にソート
    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("Timestamp","desc")
    );

    //onSnapshot:リアルタイムでデータベースに変更を反映させる
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId, collectionName, subCollectionName]);
  return { subDocuments };
};

export default useSubCollection;
