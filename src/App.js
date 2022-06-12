import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Layouts/Home/Home'
import GameZone from './Layouts/GameZone/GameZone'
import UserProfile from './Layouts/UserProfile/UserProfile'
import './app.css';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "gameZone" element={<GameZone />} />
          <Route path = "userProfile" element={<UserProfile />} />
       </Routes>
    </div>
  );
}

export default App;
