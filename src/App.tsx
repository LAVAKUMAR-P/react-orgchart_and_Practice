import { useDispatch } from 'react-redux'
import './App.css'
// import Card from './Components/Card/Card'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { useEffect } from 'react';
import { addProfileData } from './Redux/profileSclice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DemoPage from './pages/DemoPage/DemoPage';

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
      <Route path='/demo' element={<DemoPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
