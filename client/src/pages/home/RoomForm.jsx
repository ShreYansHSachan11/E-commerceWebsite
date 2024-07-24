import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomCard from "../../components/chat/RoomCard";
import UserCard from "../../components/chat/UserCard";
import useAuth from "../../hooks/useAuth";

const RoomForm = () => {
  const [user, loading] = useAuth();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    // Redirect in case of user unlogged. (wait until it finishes the loading)
    if (!loading && user == null && !state?.name) {
      return navigate("/");
    }
    // In case that the user comes from the login page, we use the location state name
    // If it is not the case, we will use the user from local storage.
    if(!loading){
      const userName = state?.name || user.displayName
      setName(userName)
    }
  }, [user, loading]);
  
  const logout = () => {
    localStorage.clear();
    return navigate("/");
  };

  const warTornZones = [
    "Aleppo",
    "kyiv",
    "Kabul",
    "Mogadishu",
    "Gaza",
    "Homs",
    "Mosul",
    "Kandahar",
    "Fallujah"
  ];

  const joinRoom = (zoneName) => {
    navigate(`/livechat?room=${zoneName}`, { state: { name: name } });
  };

  const htmlContent = (
    <section className="flex flex-col text-white w-full min-h-screen justify-center items-center">
      <UserCard name={name} user={user} logout={logout} />
      <div id="content" className="flex items-center ">
        <div className="bg-black bg-opacity-40 rounded-lg px-6 pb-6 chatgroupcontainer">
          <p className="text-2xl font-bold py-3 fontstyle">Select a war-torn zone to get Real time updates</p>
          <div className="grid grid-cols-2 md:grid-cols-3 max-w-lg gap-3">
            {warTornZones.map((zoneName, index) => (
              <RoomCard fn={() => joinRoom(zoneName)} room={zoneName} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      {loading ? <div></div> : htmlContent}
    </>
  );
};

export default RoomForm;
