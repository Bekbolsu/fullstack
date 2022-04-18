import { Button, List } from "antd";
import React, { useContext, useEffect } from "react";
import { favContext } from "../../context/favContext";
import { postContext } from "../../context/postContext";
import "./Fav.css";

const Fav = () => {
  const { getCart2, fav, deleteFromCart, changeProductCount } =
    useContext(favContext);

  const { favorite } = fav;
  useEffect(() => {
    getCart2();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        margin: "10px auto",
        flexDirection: "row",
      }}
      className="div1"
    >
      <List
        style={{
          display: "flex",
          margin: "10px auto",
          flexDirection: "row",
        }}
        itemLayout="horizontal"
        dataSource={fav.favorite}
        renderItem={(item) => (
          <div className="last_adaptive" style={{ marginTop: "20px" }}>
            <p
              onClick={() => deleteFromCart(item.item.id)}
              style={{
                textAlign: "center",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              x
            </p>
            <div className="list1">
              <h4 className="beka">@Bekbolsun</h4>
              <img className="list_img" src={item.item.img} alt="" />
              <div className="list1_titles">
                <h1 className="list_h1">{item.item.title}</h1>
                <p className="list_p">{item.item.description}</p>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Fav;
