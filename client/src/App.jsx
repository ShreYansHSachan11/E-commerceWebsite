import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/chat/Chat";
import Navbar from './components/navbar/navbar'
import RoomForm from "./pages/home/RoomForm";
import Login from "./pages/login/Login";
import LiveNews from "./pages/livenews/livenews";
import Donate from "./pages/donate/donate";
import Map from "./pages/map";
// import Profile from "./pages/donate/Profile";
// import CreateCampaign from "./pages/donate/CreateCampaign";
// import CampaignDetails from "./pages/donate/CampaignDetails";

import HomePage from './pages/homepage/homepage'


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/">
            <Route path="/" element={<LiveNews />} />
            
            <Route path="/chat" element={<Login />} />
            <Route path="/room" element={<RoomForm />} />
            
            <Route path="/livenews" element={<LiveNews />} />
            <Route path="livechat" element={<Chat />} />
            <Route path="map" element={<Map />} />
            {/* <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
