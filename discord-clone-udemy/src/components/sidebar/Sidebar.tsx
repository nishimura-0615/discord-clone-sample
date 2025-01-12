// import React, { useEffect,useState } from 'react';
import"./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth,db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import {
  collection,
  addDoc,
} from "firebase/firestore";
import useCollection from '../../hooks/useCollection';



const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user)
  const { documents:channels } = useCollection("channels");

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作成します");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
          channelName: channelName,
      });
      // console.log(docRef);
    }
  };

  return (
    <div className="sidebar">

      <div className="sidebarLeft">
        <div className='serverIcon'>
        <img src="./discordicon.png" alt="" style={{ width: '43px', height: '43px' }} />
        </div>
        <div className='serverIcon'>
          <img src="./logo192.png" alt="" style={{ width: '45px', height: '45px' }}/>
        </div>

      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon/>
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon/>
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' onClick={() => addChannel()}/>
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}


          </div>
          <div className="sidebarfooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()}/>
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0,4)}</span>
              </div>
            </div>
            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Sidebar;
