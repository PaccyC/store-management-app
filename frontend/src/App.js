import './index.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock';
import Settings from './pages/Settings';
import Logout from './components/Logout';
import { useAuthContext } from './hooks/useAuthContext';
import Notifications from './pages/Notifications';
import { createContext } from 'react';
import { ThemeProvider } from './context/ThemeContext';
export const ThemeContext=createContext(null)
function App() {

  const {user}=useAuthContext();

  return (
<ThemeProvider>
    
<div className=" max-w[1440px]">
      
  
   
      <Routes>
            <Route path='/' element={!user ?<Navigate to='/login'/>: <Dashboard/>}/>
            <Route path='/login' element={!user ?< Login/>: <Navigate to='/'/>}/>
            <Route path='/signup' element={!user ? <Signup/>: <Navigate to='/'/>}/>
            <Route path='/stock' element={!user ?<Navigate to='/login'/> : <Stock/>}/>
            <Route path='/settings' element={!user ?<Navigate to='/login'/> : <Settings/>}/>
            <Route path='/logout' element={!user ?<Navigate to='/login'/> : <Logout/>}/>
            <Route path='/notifications' element={!user  ?<Navigate to='/login'/>:<Notifications/>}></Route>

          </Routes>

    
      </div>
      </ThemeProvider>
    
  );
}

export default App;