import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useSelector } from 'react-redux';
import  Login  from "./components/login/Login"
import { RootState } from "./app/store"
import { auth } from './firebase';
import { useAppDispatch } from './app/hooks';
import { login,logout } from "./features/userSlice"
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from './utils/ErrorFallBack';

function App() {
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if(loginUser) {
        dispatch(
          login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        })
      );
      } else {
        dispatch(logout());
      }
    });
  },[dispatch]);

  return (
    <div className="App">
     {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Sidebar />
        </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
