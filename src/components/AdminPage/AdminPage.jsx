import React, { useContext, useEffect, useState } from "react";
import "./AdminPage.css";
import image6 from "../images/man.svg";
import image7 from "../images_add/publish.svg";

import { postContext } from "../../context/postContext";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

const AdminPage = () => {
  const { currentUser } = useContext(authContext);
  const { post, getPost, deletePost, count } = useContext(postContext);
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="admin">
      <div className="admin_inner">
        <div className="admin_block1">
          <img className="admin_img" src={image6}></img>
          <h1 className="beka1">{currentUser.email}</h1>
        </div>
        <div className="admin_block2">
          <img className="publish" src={image7} alt="" />
          <h2 className="publish_title">PUBLISHED IDEAS</h2>
        </div>
      </div>
      <div className="main_list2">
        {post.map((item) => (
          <div key={item.id}>
            {item.user == currentUser.email ? (
              <div className="list1 admin_post">
                <img className="list_img1" src={item.img} alt="" />
                <div className="list_div">
                  <h1 className="list_h11">{item.title}</h1>
                  <p className="list_p1">{item.description}</p>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => deletePost(item.id)}
                    className="admin_btn"
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${item.id}`}>
                    <button className="admin_btn">Edit</button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
