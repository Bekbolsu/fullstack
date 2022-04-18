import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../images/Deepstash.svg";
import image2 from "../images/logo.svg";
import image4 from "../images/add.svg";
import image6 from "../images/man.svg";
import image8 from "../images_add/fav.svg";
import image11 from "../images_add/mobile.svg";
import image12 from "../images_add/logout.svg";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { postContext } from "../../context/postContext";
import { authContext } from "../../context/authContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "rgb(34, 34, 34)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Navbar = () => {
  const { handleLogOut } = useContext(authContext);
  const { post, getPost } = useContext(postContext);
  const [searchParams, setSearchparams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchparams({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    getPost();
  }, [searchParams]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");

  const [number3, setNumber3] = useState("");
  const [alert, setAlert] = useState(false);
  function pay() {
    if (!number || !number2 || !number3) {
      setAlert(true);
    } else {
      alert("We will check your card");
      handleClose();
    }

    setNumber("");
    setNumber2("");
    setNumber3("");
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }
  const [info, setInfo] = useState(false);

  const [open1, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="container">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            We have a settings with <br /> payment try it in one hour
          </Alert>
        </Snackbar>
      </Stack>
      <div className="main_navbar">
        <div className="navbar">
          <div className="navbar_inner">
            <div className="navbar_block1">
              <Link to="/">
                <img className="navbar_img" src={image} alt="" />
              </Link>
              <div onClick={handleOpen} className="pro">
                <img className="pro_img" src={image2} alt="" />
                <h5 className="pro_h6">GET PRO</h5>
              </div>

              <Modal
                className="modal_pro1"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal_pro" sx={style}>
                  <div className="pay_main">
                    <div className="modal_block1">
                      <h1 className="modal_block1_h1">Get Deepstash Pro</h1>
                      <h1 className="modal_block1_h2">Read Like a Pro</h1>
                      <p className="modal_block1_h6">
                        Jump-start your reading habits, gather your knowledge,
                        remember what you read and stay ahead of the crowd!
                      </p>
                      <h3 className="modal_block1_h5">
                        Takes just 5 minutes a day.
                      </h3>
                    </div>
                    <div className="modal_block2">
                      <h1 className="visa">Visa / Maestro / Bitcoin</h1>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <p className="pay_p">Number of card</p>
                        <input
                          onChange={(e) => setNumber(e.target.value)}
                          value={number}
                          placeholder="12345..."
                          className="pay_inp1"
                          type="text"
                        />
                      </div>

                      <div style={{ display: "flex" }}>
                        <div>
                          <p className="pay_p">mm</p>
                          <input
                            onChange={(e) => setNumber2(e.target.value)}
                            value={number2}
                            placeholder="MM"
                            className="pay_inp"
                            type="text"
                          />
                        </div>

                        <div style={{ marginLeft: "10px" }}>
                          <p className="pay_p">CVV</p>
                          <input
                            onChange={(e) => setNumber3(e.target.value)}
                            value={number3}
                            placeholder="CVV"
                            className="pay_inp"
                            type="text"
                          />
                        </div>
                      </div>
                      <Button
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          {
                            pay();
                            handleClick();
                          }
                        }}
                        className="pay_btn"
                      >
                        Pay 100$
                      </Button>
                    </div>
                  </div>
                  <div className="pay_block3">
                    <button onClick={handleClose} className="pay_btn2">
                      Learn More
                    </button>
                  </div>
                </Box>
              </Modal>

              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search for ideas,articles"
                className="search_inp"
                type="text"
              />
            </div>
            <div></div>
            <div className="navbar_block2">
              <Link
                onClick={() => setInfo(false)}
                style={{ textDecoration: "none" }}
                to="/add"
              >
                <div className="navbar_block2_add">
                  <img className="add_img" src={image4} alt="" />
                  <h4 className="add_h5">ADD IDEA</h4>
                </div>
              </Link>
              <Link to="/fav">
                <img className="add_img2" src={image8} alt="" />
              </Link>
              {info ? (
                <div className="info">
                  <div className="info_inner">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img className="info_img" src={image11} alt="" />
                      <button
                        onClick={() => {
                          setInfo(false);
                          handleLogOut();
                        }}
                        className="info_btn"
                      >
                        Log Out
                      </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <img className="info_img" src={image12} alt="" />
                      <Link onClick={() => setInfo(false)} to="/phone">
                        <button className="info_btn">Mobile</button>
                      </Link>
                    </div>

                    <Link
                      onClick={() => setInfo(false)}
                      style={{ textDecoration: "none", alignItems: "center" }}
                      to="/add"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <img
                          className="add_img_info info_fav"
                          src={image4}
                          alt=""
                        />
                        <button className="info_btn info_fav">Add idea</button>
                      </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/fav">
                      <div
                        onClick={() => setInfo(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <img
                          className="add_img_info info_fav"
                          src={image8}
                          alt=""
                        />
                        <button className="info_btn info_fav">Favorite</button>
                      </div>
                    </Link>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                      className="pro"
                    >
                      <img className="pro_img1" src={image2} alt="" />
                      <button
                        onClick={() => {
                          handleOpen();
                          setInfo(false);
                        }}
                        className="info_btn info_btn1"
                      >
                        Get Pro
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="main_man">
                <Link to="/admin">
                  <img className="man" src={image6}></img>
                </Link>

                <img
                  onClick={() => setInfo(!info)}
                  className="man_line"
                  src={image2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar2">
          <Link to="/" className="navbar2_a" href="#">
            recommended
          </Link>
          <Link to="/following" className="navbar2_a" href="#">
            following
          </Link>
          <Link to="/about" className="navbar2_a" href="#">
            about
          </Link>
          <Link to="/chat" className="navbar2_a">
            chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
