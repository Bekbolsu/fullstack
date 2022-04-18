import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine, ConnectionBar } from "react-chat-engine";
import { authContext } from "../../context/authContext";
import axios from "axios";

const Chat = () => {
  const { currentUser } = useContext(authContext);
  const [load, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-id": "668ff0f8-baf6-43b8-b63e-4ab4882d2686",
          "user-name": currentUser.email,

          "user-secret": currentUser.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", currentUser.email);
        formdata.append("username", currentUser.displayName);
        formdata.append("secret", currentUser.uid);
        getFile(currentUser.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "a8dc54d5-a299-4e90-b583-43c20ffc6ee1",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [currentUser]);
  console.log(currentUser.email);

  if (!currentUser || load) return "Loading...";

  return (
    <div className="container">
      <ChatEngine
        height="calc(100vh -66px)"
        projectID="668ff0f8-baf6-43b8-b63e-4ab4882d2686"
        userName={currentUser.email}
        userSecret={currentUser.uid}
      />
    </div>
  );
};

export default Chat;
