import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';
import ProtectedRoutes from './Routes/ProtectedRoutes';

function App() {
  const [login, setLogin] = useState(false)


  const handleLogin = (isLogin) => {
    setLogin(isLogin);
  }

  return (
    <div className="App">
      <Navbar login={login} />
      <Routes>
        <Route element={<ProtectedRoutes login={login} />} >
          <Route path='/' element={<Home />} />

        </Route>
        <Route element={<ProtectedRoutes login={login} />}>
          <Route path='React-Recipe-App' element={<Home />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login isLogin={handleLogin} login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
