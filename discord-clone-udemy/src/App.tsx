import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';
function App() {
  return (
    <div className="App">
     {/* {sidebar} */}
     <Sidebar />
     <Chat />
    </div>
  );
}

export default App;
