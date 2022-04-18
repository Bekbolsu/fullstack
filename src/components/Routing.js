import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authContext } from "../context/authContext";
import Add from "./Add/Add";
import AdminPage from "./AdminPage/AdminPage";
import Collections from "./Collections/Collections";
import Deepstash from "./Deepstash/Deepstash";
import Edit from "./Edit/Edit";
import Fav from "./Fav/Fav";
import Following from "./Following/Following";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Kruto from "./Navbar2/Kruto";
import Phone from "./Phone/Phone";
import About from "./About/About";
import Chat from "./Chat/Chat";

const Routing = () => {
  const { currentUser } = useContext(authContext);
  return (
    <BrowserRouter>
      {currentUser === "" ? (
        <Deepstash />
      ) : (
        <>
          {" "}
          <Navbar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/following" element={<Following />} />
            <Route path="/about" element={<About />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/" element={<Kruto />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routing;
