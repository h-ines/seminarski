import React, { useState } from "react";
import Login from "./login/Login";
import Chat from "./chat/Chat";
import UserContext from "./context/UserContext";



const CHANNEL_ID = "5VzBHDznJRBLBoCu";

export default function MyChatApp() {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  function userLogin(username, avatar) {
    if (username) {
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username, avatar },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username, avatar });
      });
    }
  }

  function userLogout() {
    drone.close();
    setDrone(null);
    setUser(null);
  }

  return (
    <div>
      <UserContext.Provider value={{ user, drone, userLogin, userLogout }}>
        {!user && <Login />}
        {user && <Chat />}
      </UserContext.Provider>
    </div>
  );
}