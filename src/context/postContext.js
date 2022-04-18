import React, { useReducer, useState } from "react";
import axios from "axios";
export const postContext = React.createContext();

let API = "http://localhost:8000/post";
const INIT_STATE = {
  post: [],
  onePost: null,
  pages: 0,
  count: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        post: action.payload,
        pages: Math.ceil(action.payload["x-total-count"] / 2),
      };
    case "GET_ONE_POST":
      return {
        ...state,
        onePost: action.payload,
      };
    case "INCREMENT":
      return {
        count: action.payload,
      };
    default:
      return state;
  }
};

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPost() {
    let { data } = await axios.get(API + window.location.search);
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  }
  async function addPost(newObj) {
    await axios.post(API, newObj);
    getPost();
  }
  async function deletePost(id) {
    await axios.delete(`${API}/${id}`);
    getPost();
  }
  async function updatePost(id, edited) {
    await axios.patch(`${API}/${id}`, edited);
    getPost();
  }

  async function getOnePost(id) {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_POST",
      payload: data,
    });
  }

  function counter() {
    let count = count;
    dispatch({
      type: "INCREMENT",
      payload: count++,
    });
  }

  return (
    <postContext.Provider
      value={{
        post: state.post,
        onePost: state.onePost,
        pages: state.pages,
        count: state.count,
        addPost,
        getPost,
        deletePost,
        getOnePost,
        updatePost,
        counter,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
export default PostContextProvider;
