import React, { useContext, useEffect, useState } from "react";
import "./Edit.css";
import { postContext } from "../../context/postContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const Edit = () => {
  const { onePost, getOnePost, updatePost } = useContext(postContext);
  const params = useParams();
  const [edit, setEdit] = useState(onePost);
  useEffect(() => {
    getOnePost(params.id);
  }, []);
  useEffect(() => {
    setEdit(onePost);
  }, [onePost]);
  function handleInp(e) {
    let newPost = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(newPost);
  }
  const navigate = useNavigate();
  return edit ? (
    <div className="edit1">
      <div className="edit_inner">
        <div className="edit_block">
          Image :
          <input
            className="edit"
            onChange={handleInp}
            name="img"
            value={edit.img}
            type="text"
            placeholder="URL of image"
          />
        </div>
        <div className="edit_block" style={{ margin: "10px 0" }}>
          Title :
          <input
            className="edit edit3"
            onChange={handleInp}
            name="title"
            value={edit.title}
            type="text"
            placeholder="Title"
          />
        </div>
        <div
          className="edit_block"
          style={{ display: "flex", alignItems: "flex-start" }}
        >
          Description :
          <textarea
            className="edit2"
            onChange={handleInp}
            name="description"
            value={edit.description}
            placeholder="Description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <Button onClick={() => navigate("/admin")}>Close</Button>
        <Button
          onClick={() => {
            updatePost(params.id, edit);
            navigate("/admin");
          }}
        >
          Save
        </Button>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default Edit;
