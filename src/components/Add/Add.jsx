import React, { useContext, useEffect, useState } from "react";
import "./Add.css";
import image from "../images_add/add.svg";
import image2 from "../images_add/bomb.svg";
import image3 from "../images_add/back.svg";
import { Link } from "react-router-dom";
import { postContext } from "../../context/postContext";
import { authContext } from "../../context/authContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Add = () => {
  const { currentUser } = useContext(authContext);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addPost, getPost, count, counter } = useContext(postContext);
  const [modal, setModal] = useState(false);
  function postAdd() {
    let newObj = {
      img,
      title,
      description,
      user: currentUser.email,
      date: new Date(),
    };
    if (!img || !title || !description) {
      return setModal(true);
    }
    setDescription("");
    setImg("");
    setTitle("");
    addPost(newObj);
  }
  setTimeout(() => {
    setModal(false);
  }, 2000);

  return (
    <div className="container">
      <Link style={{ textDecoration: "none" }} to="/">
        <div style={{ display: "flex" }}>
          <img className="img_back" src={image3} alt="" />
          <h3 className="back_h3">Back</h3>
          {modal ? (
            <Stack
              style={{ margin: "0 auto" }}
              sx={{ width: "20%" }}
              spacing={2}
            >
              <Alert severity="warning">Fill in all inputs</Alert>
            </Stack>
          ) : null}
        </div>
      </Link>
      <div className="add_post">
        <div className="add_post_block">
          <div className="add_block1">
            <img className="add_img" src={image} alt="" />
            <input
              onChange={(e) => setImg(e.target.value)}
              value={img}
              className="add_inp"
              type="text"
              placeholder="Add Image"
            />
          </div>

          <div className="add_block2">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bomb_inp"
              type="text"
              placeholder="Title of the idea"
            />
            <img className="bomb" src={image2} alt="" />
          </div>
          <textarea
            maxLength={130}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="What inspiring idea you want to share with world today?"
            className="text_bomb"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={() => postAdd()} className="btn_add">
            + Add Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
