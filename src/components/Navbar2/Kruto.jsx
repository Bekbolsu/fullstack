import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { postContext } from "../../context/postContext";
import Navbar2 from "./Navbar2";
import Pizza from "./Pizza";
import "./Pagination.css";
import { Button } from "@mui/material";
const Kruto = () => {
  const { post, getPost, pages } = useContext(postContext);

  const [searchParams, setSearchparams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [title, setTitle] = useState(post);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    setSearchparams({
      _limit: limit,
      _page: page,
      title: title,
    });
  }, [page, limit, title]);
  useEffect(() => {
    getPost();
  }, [searchParams]);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Pizza title={title} setTitle={setTitle} />

      {post.map((item) => (
        <>
          <Navbar2 key={item.id} item={item} />
        </>
      ))}
      <div className="pagination">
        <div>
          <Button
            className="prev"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            prev
          </Button>
          <span style={{ color: "white" }}>{page}</span>
          <Button
            className="next"
            disabled={page === limit ? true : false}
            onClick={() => setPage(page + 1)}
          >
            next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kruto;
