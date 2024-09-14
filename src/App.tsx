import { useDispatch } from 'react-redux'
import './App.css'
// import Card from './Components/Card/Card'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import TodoPage from './pages/TodoPage/TodoPage'
import { useEffect } from 'react';
import { addProfileData } from './Redux/profileSclice';

function App() {
  const dispatch = useDispatch();
 useEffect(() => {
  dispatch(addProfileData({}))
 }, [])
 

  return (
    <>
     {/* <Card  name="data" age={50} MoreData={["happy"]}/> */}
    <ProfilePage/>
    {/* <TodoPage/> */}
    </>
  )
}

export default App
