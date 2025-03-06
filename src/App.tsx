import { useDispatch } from 'react-redux'
import './App.css'
// import Card from './Components/Card/Card'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import TodoPage from './pages/TodoPage/TodoPage'
import { useEffect } from 'react';
import { addProfileData } from './Redux/profileSclice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
 useEffect(() => {
  dispatch(addProfileData({}))
 }, [])
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProfilePage/>}/>
      <Route path='/' element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
